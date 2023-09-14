const router = require("express").Router();
let Appointment = require("../models/Appointment");

// http://localhost:8090/appointment/add

router.route("/add").post((req, res)=>{

    const photographer = req.body.photographer;
    const eventType = req.body.eventType;
    const customerName = req.body.customerName;
    const customerContactNo = req.body.customerContactNo;
    const customerEmail = req.body.customerEmail;
    const date = Date(req.body.date);

    const newAppointment = new Appointment({
        photographer,
        eventType,
        customerName,
        customerContactNo,
        customerEmail,
        date
    })
// Error handling
    newAppointment.save().then(()=>{
        res.json("Appoinment Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/get").get((req, res)=>{

    Appointment.find().then((appointments)=>{
        res.json(appointments)
    }).catch((err)=>{
        console.log(err);
    })

})

// : should use to fetch the ID from URL
// can also use POST instead of PUT
//using asyncawait function
router.route("/update/:id").put(async(req, res) => {
    let userId=req.params.id;
    const {photographer,eventType,customerName,customerContactNo,customerEmail,date}=req.body;
   
    const updateAppoinment ={
        photographer,
        eventType,
        customerName,
        customerContactNo,
        customerEmail,
        date
    }
        
    const update = await Album.findByIdAndUpdate(itemId, updateAlbum)
    .then(() => {
        res.status(200).send({status: "Album updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"})
    })

  });

router.route("/delete/:id").delete(async(req, res) => {
    let appointmentID = req.params.id;
    
    await Appointment.findByIdAndDelete(appointmentID).then(() => {
        res.status(200).send({status: "Data deleted"});
    }).catch((err) => {
        res.status(500).send({status: "Error with deleting data", error: err.meaasge}); 
    })
})

// get single appointment
//router.route("/get/:id").get(async(req, res) =>{
//    let appointmentID = req.params.id;
//    const appointment = await Appointment.findById(appointmentID).then((appointment) => {
 //       res.status(200).send({status: "Single data fetched", appointment});
   // }).catch((err) => {
     //   console.log(err.message);
       // res.status(500).send({status: "Error with getting single data", error: err.meaasge});
    //})
//})

router.route('/get/:id').get(async(req, res) => {
        let appoinmentId = req.params.id;
        const appoinment= await Appointment.findById(appoinmentId)
        .then((appinment) => {
            res.status(200).send({status: "appinment fetched", appinment})
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({status:"Error withfetch album", error: err.message})
        })
    
  })

module.exports = router;