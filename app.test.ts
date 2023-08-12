import app from './src/app';
import { Server } from 'http';

let server: Server;
const PORT = 3501; // Ensure this is the same port as in your app.ts or server.ts

beforeAll(() => {
  server = app.listen(PORT);
});

afterAll((done) => {
  server.close(done);
});

test('placeholder test', () => {
  expect(true).toBe(true);
});
