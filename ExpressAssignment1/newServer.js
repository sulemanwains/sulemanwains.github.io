const express = require('express')
const app = express()
const path=require("path");

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

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

    ++count;
    storedData=req.body;
    
    res.redirect("/view");
    
    });



app.get("/view", (req, res) => {

    ++count;

var text1=storedData.textfield;

var radio1=storedData.degree;

var checkbox1=storedData.course;

var option1=storedData.sellist;

var textarea1=storedData.txtArea;

res.send("Text Box Data is: " + text1 + '</br>' + "The Degree is: " + radio1 + '</br>' + "Course Your Selected: " + checkbox1 + '</br>' + "The Writtn Message is : " + textarea1);

});


app.get('/pagehits', (req, res) => {
    ++count;
  res.send('Total Number of hits are: ' + count);
})




app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
});


app.use((req, res) => {
  ++count;
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});