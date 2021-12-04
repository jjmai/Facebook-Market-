const express = require('express');
const {Pool} = require('pg');

const router = express.Router();

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

router.get('/', async (req, res, next) => {
  const { categoryId } = req.query;
  let params = [];

  let sql = `
    SELECT * FROM listings l 
      JOIN listing_categories lc ON l.id = lc."listingId"
      JOIN categories c ON lc."categoryId" = c.id
  `
  if (categoryId) {
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

module.exports = router;
