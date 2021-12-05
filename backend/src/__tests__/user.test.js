const supertest = require('supertest');
const db = require('./db');
const app = require('../app');
const http = require('http');

let server;

beforeAll(async () => {
  server = http.createServer(app);
  server.listen();
  request = supertest(server);
  await db.reset();
});

afterAll((done) => {
  server.close(done);
});

describe('create user', () => {
  test('create user with unexpected properties', async () => {
    const user = {
      name: 'test',
      password: '123456',
    };
    await request
      .post('/v0/users')
      .send(user)
      .set('Accept', 'application/json')
      .expect(400);
  });

  test('create a new user', async () => {
    const user = {
      name: 'test',
      email: 'test@gamil.com',
      password: '123456',
    };
    const response = await request
      .post('/v0/users')
      .send(user)
      .set('Accept', 'application/json')
      .expect(200);
    expect(response.body.id).toBeDefined();
    expect(response.body.name).toEqual(user.name);
    expect(response.body.email).toEqual(user.email);
    expect(response.body.password).toBeUndefined();
  });

  test('duplicate user email', async () => {
    const user = {
      name: 'test',
      email: 'test@gamil.com',
      password: '123456',
    };
    await request
      .post('/v0/users')
      .send(user)
      .set('Accept', 'application/json')
      .expect(403);
  });
});

describe('authenticate user', () => {
  test('authenticate user with unexpected properties', async () => {
    const user = {
      email: 'test not exist',
    };
    await request
      .post('/v0/users/authenticate')
      .send(user)
      .set('Accept', 'application/json')
      .expect(400);
  });

  test('authenticate user with email not exist', async () => {
    const user = {
      email: 'emailNotExist@gmail.com',
      password: '123456',
    };
    await request
      .post('/v0/users/authenticate')
      .send(user)
      .set('Accept', 'application/json')
      .expect(404);
  });

  test('authenticate user with invalid password', async () => {
    const user = {
      email: 'xluo41@ucsc.edu',
      password: '123',
    };
    await request
      .post('/v0/users/authenticate')
      .send(user)
      .set('Accept', 'application/json')
      .expect(404);
  });

  test('authenticate user with valid email and password', async () => {
    const user = {
      email: 'xluo41@ucsc.edu',
      password: '123456',
    };
    const response = await request
      .post('/v0/users/authenticate')
      .send(user)
      .set('Accept', 'application/json')
      .expect(200);
    expect(response.body).toMatchObject(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        email: expect.any(String),
      }),
    );
  });
});
