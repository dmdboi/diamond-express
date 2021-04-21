import app from './app';
const PORT = process.env.PORT;

app.listen(3000, () => {
  //Depending on setup, skip console.log()
  console.log(`Express server running on http://localhost:3000`);
});
