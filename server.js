const app = require("./app");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3008;

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`listening for traffic on port ${PORT}`);
});

