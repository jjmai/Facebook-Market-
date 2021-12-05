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

describe('get category', () => {
  test('get root category', async () => {
    const response = await request.get('/v0/categories').expect(200);
    expect(response.body).toEqual(expect.any(Array));
  });

  test('get sub category without root categoryId', async () => {
    await request.get('/v0/categories/subCategories').expect(400);
  });

  test('get sub category with categoryId', async () => {
    const response =
      await request.get('/v0/categories/subCategories?categoryId=1')
        .expect(200);
    expect(response.body).toEqual(expect.any(Array));
  });
});
