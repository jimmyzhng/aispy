const app = require('../index'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

describe('GET /videos', () => {
  test('should return an array of videos', async () => {
    const response = await request.get('/api/videos?id=1');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

afterAll(() => {
  const server = app.listen();
  server.close();
});
