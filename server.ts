import app from './src/app';

const PORT = 3500;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
