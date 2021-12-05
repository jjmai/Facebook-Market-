const express = require('express');
const {Pool} = require('pg');
// eslint-disable-next-line
const router = express.Router();

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

router.get('/', async (req, res, next) => {
  const {categoryId, userId} = req.query;
  let params = [];

  let sql = `
    SELECT * FROM listings l 
      JOIN listing_categories lc ON l.id = lc."listingId"
      JOIN categories c ON lc."categoryId" = c.id
      JOIN users u ON l.created_by = u.id
  `;
  if (userId) {
    sql += ` WHERE l.created_by = $1`;
    params = [userId];
  } else if (categoryId) {
    sql += `
      WHERE
        lc."categoryId" = $1
        OR
        lc."categoryId"
        IN
          (SELECT c1."id" FROM categories c
             JOIN categories c1 ON c.id = c1.parent_id
             WHERE c.id=$2)
    `;
    params = [categoryId, categoryId];
  }
  const result = await pool.query(sql, params);
  res.json(result.rows);
});

router.post('/', async (req, res, next) => {
  const listing = req.body;
  const {createdBy, text, imageLink, category} = listing;

  const createResult = await pool.query(
    'INSERT INTO listings(created_by, create_date, text, image_link)' +
    ' values($1, $2, $3, $4) RETURNING *',
    [createdBy, new Date(), text, imageLink]);
  const id = createResult.rows[0].id;
  await pool.query('INSERT INTO listing_categories("categoryId", "listingId")' +
    ' values($1, $2)', [category, id]);
  const respListing = {
    id,
    create_date: createResult.rows[0].create_date,
    created_by: createdBy,
    text,
    category,
    image_link: imageLink,
  };
  res.json(respListing);
});

module.exports = router;
