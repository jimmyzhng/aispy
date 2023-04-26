const app = require('../index'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

describe('GET /users', () => {
  test('should return an object with isLoggedIn and user', async () => {
    const response = await request.get('/api/login');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
