const app = require('../index'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

describe('GET /login', () => {
  test('should return status code 200', async () => {
    const response = await request.get('/api/login');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('isLoggedIn');
  });

});

describe('POST /login', () => {
  test('POST /login should log user in, returning status code 200 and success as true', async () => {
    const response = await request
      .post('/api/login')
      .send({ username: 'user1', password: '123' });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true });
  });

  test('POST /login should return status code 401 if incorrect password', async () => {
    const response = await request
      .post('/api/login')
      .send({ username: 'user1', password: '1231312313' });
    expect(response.status).toBe(401);
    expect(response.text).toBe('Invalid username or password.');
  });
});

afterAll(() => {
  const server = app.listen();
  server.close();
});