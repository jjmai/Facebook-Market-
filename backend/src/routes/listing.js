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

  const result = await pool.query('SELECT * FROM listings l JOIN listing_categories lc ON l.id = lc."listingId" JOIN categories c ON lc."categoryId" = c.id;');
  res.json(result.rows);
});

module.exports = router;
