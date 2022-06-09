const express = require('express')
const app = express()
const path=require("path");
const ejs=require("ejs");
const cookieParse =require("cookie-parser");
const bodyParser=require('body-parser');

app.use(cookieParse());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', "html");
app.engine('html', ejs.renderFile);

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
let count=0;
let storedData="";

app.get('/', (req, res) =>{
    ++count;
    res.send('Home Page');

});



app.get('/add', (req, res) => {

    ++count;
    res.sendFile(path.join(__dirname, "/dom_assignment.html"));
});



app.post("/add", (req, res) => {

    // ++count;
    storedData=req.body;


    if(storedData.degree){
        res.cookie("mydegree", storedData.degree)
    }


    if(storedData.course){
        res.cookie("mycourse", storedData.course)
    }


    if(storedData.textfield){
        res.cookie("mydegree", storedData.textfield)
    }
    

    if(storedData.course){
        res.cookie("mycourse", storedData.txtArea)
    }
    
    res.redirect("/view");
    
    });



    app.get('/view', (req, res) => {

      res.render(path.join(__dirname, "view", "basichtml.html"), {storedData});
    })




app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
});