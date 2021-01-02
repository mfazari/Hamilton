// Setup
const express = require("express");
const bodyParser = require("body-parser")

// Express stuff
const app = express();
const router = express.Router();

// parse application/json
app.use(bodyParser.json());

// Present Value
app.get('/FV/', (req, res) => {
    var numberofCF = parseInt(req.query.numberofCF)
    var A = parseInt(req.query.paramA);
    var B = parseInt(req.query.paramB);

    console.log(A+B)
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

