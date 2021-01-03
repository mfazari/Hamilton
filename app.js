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
        temp = (A[x] / (1 + interest)^x);
        PV.push(temp);
    }
    res.send(PV);
})



app.listen(8000, () => {
    console.log(`Example app listening at http://localhost:8000`)
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

