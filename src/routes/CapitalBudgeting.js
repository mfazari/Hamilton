import { Router } from "express";

const app = Router();

// Net Present Value
app.get("/NPV", (req, res) => {
  var investment1 = parseInt(req.query.investment1);
  var numberCF = parseInt(req.query.numberCF); // Number of Cashflows
  // console.log(numberCF);
  var A = [];
  var interest = parseInt(req.query.interest); // interest
  for (let i = 1; i <= numberCF; i++) {
    A.push(parseInt(req.query["CF" + i]));
  }
  var NPV = [];
  var temp = 0;
  for (let x = 0; x < A.length; x++) {
    temp = temp + A[x] / ((1 + interest) ^ x);
    NPV.push(temp - investment1);
  }
  temp = temp - investment1;
  res.send(temp + "");
});

function calculateRBF(interest, n) {
  let RBF = (1/interest) - ((1/interest)/((1+k)^n));
  return RBF;
  }

// Annuity
app.get("/NPV", (req, res) => {
  if (req.query.RBF == undefined) {
    calculateRBF(req.query.interest, req.query.n);
  } else {
    RBF = parseInt(req.query.RBF);
  }
  var NPV = parseInt(req.query.NPV;
  var annuity = NPV / RBF;
  res.send(annuity + "");
});

export default app;
