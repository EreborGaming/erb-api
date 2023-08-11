import express, { Request, Response } from 'express';

const app = express();
const PORT = 3500;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;  // This line exports the app instance for use in other files.
