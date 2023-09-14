const router = require("express").Router();
let Banner = require("../models/Banner");

router.route("/add").post((req, res) => {
  
  const Banner_ID = req.body.Banner_ID;
  const Banner_Name = req.body.Banner_Name;
  const Banner_Description = req.body.Banner_Description;
  const Banner_Image = req.body.Banner_Image;

  const newBanner = new Banner({
 
    Banner_ID,
    Banner_Name,
    Banner_Description,
    Banner_Image
  })

  newBanner.save().then(() => {
      res.json("Banner Added")
    })
    .catch((err) => {
      console.log(err);
    })
})




router.route("/").get( (req, res) => {
  Banner.find().then((banner) => {
      res.json(banner)
  }).catch((err)=>{
      console.log(err);
  })

});

//////////////Update Banner/////////////////

router.route("/update/:id").put(async (req, res) => {
  //wait for the promise
  let banner_id = req.params.id;
  const { Banner_ID,Banner_Name,Banner_Description,Banner_Image } = req.body;

  const updateBanner = {
    
    Banner_ID,
    Banner_Name,
    Banner_Description,
    Banner_Image
  }

  const update = await Banner.findByIdAndUpdate(banner_id, updateBanner)
    .then(() => {
      res.status(200).send({ status: "Banner updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating banner", error: err.message });
    })
})

//////////////Delete Banner/////////////////

router.route("/delete/:id").delete(async (req, res) => {
  let banner_id = req.params.id;

  await Banner.findByIdAndDelete(banner_id)
    .then(() => {
      res.status(200).send({ status: "Banner deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error with deleting banner", error: err.message });
    });
});

//////////////Retrive only one banner/////////////////
//http://localhost:8090/banner/get/6235500a031aae9b6194ef64

router.route("/get/:id").get(async (req, res) => {
  let banner_id = req.params.id;
  const banner = await Banner.findById(banner_id)
    .then((banner) => {
      res.status(200).send({ status: "Banner fetched", banner });
    })
    .catch(() => {
      console.log(err.message);
      res.status(500).send({ status: "Error with get Banner", error: err.message });
    });
});



module.exports = router;
