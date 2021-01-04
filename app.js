// Setup
const express = require("express");
const bodyParser = require("body-parser")

// Express stuff
const app = express();
const router = express.Router();

// parse application/json
app.use(bodyParser.json());

// Present Value
app.get('/PV', (req, res) => {
    var numberCF = parseInt(req.query.numberCF); // Number of Cashflows
    // console.log(numberCF);
    var A = [];
    var interest = parseInt(req.query.interest); // interest
    for(let i = 1; i <= numberCF; i++) {
        A.push(parseInt(req.query["CF" + i]));
    }
    var PV = [];
    var temp = 0;
    for(let x = 0; x < A.length; x++){
        temp = temp + (A[x] / ((1 + interest)^x));
        PV.push(temp);
    }
    res.send(temp + "");
})

// Future Value
app.get('/FV', (req, res) => {
    var CF = parseInt(req.query.CF);
    var time = parseInt(req.query.time);
    var interest = parseInt(req.query.interest); // interest
    var FV = PV * ((1+interest)^time)
    res.send(FV + "");
})

// Simple Interest
app.get('/SI', (req, res) => {
    var CF = parseInt(req.query.CF);
    var time = parseInt(req.query.time);
    var interest = parseInt(req.query.interest); // interest
    var m = parseInt(req.query.m); // periods
    var FV = CF * ((1+(interest/m))^(time*m));
    res.send(FV + "");
})

// Continuous Compounding Interest
app.get('/CCI', (req, res) => {
    var CF = parseInt(req.query.CF);
    var time = parseInt(req.query.time);
    var interest = parseInt(req.query.interest); // interest
    var m = parseInt(req.query.m); // periods
    var FV = CF * ((Math.E)^(interest*time))
    res.send(FV + "");
})


app.listen(8000, () => {
    console.log(`App listening at http://localhost:8000`)
})


/*
var recursiveAsyncReadLine = function () {
    readline.question("Type command \n", (name) => {
        if(name == "alive"){
            console.log("Hi! I’m still here!");
            return readline.close();
        }
        else if(name == "help"){
            help();
            return readline.close();
        }
        else if(name.startsWith(("set home"))){
            postcode(name);
            return readline.close();
        }
        else {
            error();
        }
        recursiveAsyncReadLine(); //Calling this function again to ask new question
    });
};
*/

