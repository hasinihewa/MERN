//Import packages and assign it into one variable

const express =  require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


//Define a port for the server
const PORT = process.env.PORT || 8090; //if the 8060 port is not available run this on available port

//Use Method 
app.use(cors());
app.use(bodyParser.json()); // json format-> key-value pairs

//connect the database
const URL = process.env.MONGODB_URL;

mongoose.connect('mongodb+srv://hasinii:hasiniUCSC4321@cluster0.xfgrfrz.mongodb.net/hhggff?retryWrites=true&w=majority',
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MonoDB Connection Sucess!");
})

// Appoinment Management
const appointmentRouter = require("./routes/appointments.js");
app.use("/appointment", appointmentRouter);

// Album Management
const albumRouter = require("./routes/albums.js");
app.use("/album", albumRouter);

// Banner Management
const bannerRouter = require("./routes/banners.js");
app.use("/banner", bannerRouter);

//User
const userRouter = require("./routes/users.js");
app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
} )