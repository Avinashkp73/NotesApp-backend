const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const notesRoutes = require('./routes/notes');

const app = express();
const cors= require('cors');
const PORT = 5000;

connectDB();

//middleware
app.use(bodyParser.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.setHeader("Access-Control-Allow-Credentials","true");
    res.send("API running");
});
//app.use(express.static('public'));

app.use('/notes', notesRoutes);


app.listen(PORT, () => {
    console.log(`Server is running fine on port : ${PORT} `);
})
