const router = require("express").Router();
let User = require("../models/User");

router.route("/add").post((req,res)=>{
    const  name= req.body.name;
    const  Contact_No= Number(req.body.Contact_No);
    const  Address= req.body.Address;
    const  Email= req.body.Email;
    const  IdNo= req.body.IdNo;
   


    const newUser = new User({
        name,
        Contact_No,
        Address,
        Email,
        IdNo
    })
    newUser.save().then(()=>{
        res.json("User added!")
    
    }).catch((err)=>{
         console.log(err);
    })
})

router.route("/").get((req,res)=>{
    User.find().then((User)=>{
        res.json(User)
    
    }).catch(()=>{
         console.log(err);
    })

})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{ name,Contact_No,Address, Email, IdNo}=req.body;

    const updateUser = {
        name,
        Contact_No,
        Address,
        Email,
        IdNo
    }
    const update = await User.findByIdAndUpdate(userId,updateUser)
    .then(()=>{
    res.status(200).send({status: "User updated"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status: "Error with updating data",error:err.messContact_No});
})
})
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await User.findByIdAndUpdate(userId)
    .then(()=>{
     res.status(200).send({status: "User deleted"});
    }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status: "Error with deleing data",error:err.message});
})
})
router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user= await User.findById(userId)
    .then(()=>{
     res.status(200).send({status: "User found"});
    }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status: "Error with getting data",error:err.message});
})
})
module.exports = router;
