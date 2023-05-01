const app = require('../index'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

describe('GET /users', () => {
  test('should return an array of users', async () => {
    const response = await request.get('/api/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('POST /users', () => {
  test('should create a new user with success message', async () => {
    const user = "user" + Math.random() * 100;
    const response = await request
      .post('/api/users')
      .send({
        username: user,
        password: 'test123',
        email: `${user}@test.com`
      });
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  test('should return error message if missing credentials', async () => {
    const response = await request
      .post('/api/users')
      .send({
        username: 'test',
        password: 'testtest'
      });
    expect(response.status).toBe(400);
    expect(response.text).toBe('Credentials missing.');
  });

  test('should return error message if user already exists', async () => {
    const response = await request
      .post('/api/users')
      .send({
        username: 'user1',
        password: '123',
        email: 'user@test.ca'
      });
    expect(response.status).toBe(409);
    expect(response.text).toBe('User exists already.');
  });

});

afterAll(() => {
  const server = app.listen();
  server.close();
});



