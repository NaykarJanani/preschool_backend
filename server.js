const pool = require("./db");

const app = require('./src/app');

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Database connection error", err);
  } else {
    console.log("Database connected:", res.rows);
  }
});