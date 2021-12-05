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

describe('listing test', () => {
  test('post listing', async () => {
    const listing = {
      createdBy: 2,
      text: 'test',
      imageLink: 'http://picture1.com',
      category: 2,
    };
    const response = await request
      .post('/v0/listings')
      .send(listing)
      .set('Accept', 'application/json')
      .expect(200);
    expect(response.body).toMatchObject(
      expect.objectContaining({
        id: expect.any(Number),
        category: expect.any(Number),
        text: expect.any(String),
        image_link: expect.any(String),
        created_by: expect.any(Number),
        create_date: expect.any(String),
      }),
    );
  });

  test('get listing without query', async () => {
    const response = await request
      .get('/v0/listings')
      .expect(200);
    expect(response.body).toEqual(expect.any(Array));
  });

  test('get listing without categoryId', async () => {
    const response = await request
      .get('/v0/listings?categoryId=1')
      .expect(200);
    expect(response.body).toEqual(expect.any(Array));
  });

  test('get listing without userId', async () => {
    const response = await request
      .get('/v0/listings?userId=2')
      .expect(200);
    expect(response.body).toEqual(expect.any(Array));
  });
});
