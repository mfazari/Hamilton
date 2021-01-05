// Setup
import express from "express";

// Express stuff
const app = express();
import TimeValueofMoney from "./routes/TimeValueofMoney.js";
import test from "./routes/test.js";
import CapitalBudgeting from "./routes/CapitalBudgeting";

// our routes
app.use("/", TimeValueofMoney);
app.use("/", test);
app.use("/", CapitalBudgeting);

app.listen(8000, () => {
  console.log(`App listening at http://localhost:8000`);
});
