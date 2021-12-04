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
  const result = await pool.query('SELECT * FROM listings');
  res.json(result.rows);
});

module.exports = router;
