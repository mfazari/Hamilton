import { Router } from "express";

const app = Router();

// Present Value
app.get("/PV", (req, res) => {
  var numberCF = parseInt(req.query.numberCF); // Number of Cashflows
  // console.log(numberCF);
  var A = [];
  var interest = parseInt(req.query.interest); // interest
  for (let i = 1; i <= numberCF; i++) {
    A.push(parseInt(req.query["CF" + i]));
  }
  var PV = [];
  var temp = 0;
  for (let x = 0; x < A.length; x++) {
    temp = temp + A[x] / ((1 + interest) ^ x);
    PV.push(temp);
  }
  res.send(temp + "");
});

// Future Value/Interest
app.get("/FV", (req, res) => {
  if (req.query.m == undefined) {
    m = 1;
  } else {
    m = parseInt(req.query.m);
  }
  var CF = parseInt(req.query.CF);
  var time = parseInt(req.query.time);
  var interest = parseInt(req.query.interest); // interest
  var m = parseInt(req.query.m); // periods
  var FV = CF * ((1 + interest / m) ^ (time * m));
  res.send(FV + "");
});

// Continuous Compounding Interest
app.get("/CCI", (req, res) => {
  var CF = parseInt(req.query.CF);
  var time = parseInt(req.query.time);
  var interest = parseInt(req.query.interest); // interest
  var m = parseInt(req.query.m); // periods
  var FV = CF * (Math.E ^ (interest * time));
  res.send(FV + "");
});

export default app;
