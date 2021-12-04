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
  const result = await pool.query('SELECT * FROM categories where parent_id is null');
  res.json(result.rows);
});

router.get('/subCategories', async(req, res, next) => {
  const {categoryId} = req.query;
  if (categoryId) {
    const result = await pool.query('SELECT * FROM categories where parent_id = $1', [categoryId]);
    res.json(result.rows);
  } else {
    res.status(404).send();
  }
});

module.exports = router;
