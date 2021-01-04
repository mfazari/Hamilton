import { Router } from "express";

const app = Router();

// Test
app.get('/test', (req, res) => {
    var test = req.query.test;
    if(test == undefined){
        res.send( "nope");
    }
    res.send( test + "");
})

export default app;
