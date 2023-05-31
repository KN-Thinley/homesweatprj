const app = require("./app");

require("dotenv").config({ path: "./configuration/config.env" });
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port${port}..`);
});
