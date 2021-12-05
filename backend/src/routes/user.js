const express = require('express');
const {Pool} = require('pg');
const bcrypt = require('bcrypt');
// eslint-disable-next-line
const router = express.Router();

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

router.post('/authenticate', async (req, res, next) => {
  const user = req.body;

  const findResult = await pool.query(
    'SELECT * FROM users WHERE email = $1', [user.email]);
  if (findResult.rowCount > 0) {
    const findUser = findResult.rows[0];
    if (bcrypt.compareSync(user.password, findUser.password)) {
      delete findUser['password'];
      res.json(findUser);
    } else {
      res.status(404).send();
    }
  } else {
    res.status(404).send();
  }
});


router.post('/', async (req, res, next) => {
  const user = req.body;

  const findResult = await pool.query(
    'SELECT * FROM users WHERE email = $1', [user.email]);
  if (findResult.rowCount > 0) {
    res.status(403).send();
    return;
  }

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync( user.password, salt);
  const createResult = await pool.query(
    'INSERT INTO users(name, email, password) ' +
    'values($1, $2, $3) RETURNING *', [user.name, user.email, hashPassword]);
  user.id = createResult.rows[0].id;
  delete user['password'];
  res.json(user);
});

module.exports = router;
