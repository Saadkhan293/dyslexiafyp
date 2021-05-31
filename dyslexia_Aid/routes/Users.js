const { Users } = require("../models/Users");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");

// router.get(`/`, async (req, res) => {
//   const userlist = await Users.find();
//   if (!userlist) {
//     res.status(500).json({
//       success: false,
//     });
//   }
//   res.send(userlist);
// });
router.get(`/`, async (req, res) => {
  const userlist = await Users.find().select("-passwordHash");
  if (!userlist) {
    res.status(500).json({
      message: "cannot find user",
      success: false,
    });
  }
  res.send(userlist);
});
router.get(`/:id`, async (req, res) => {
  const userlist = await Users.findById(req.params.id);
  if (!userlist) {
    res.status(500).json({
      success: false,
      message: "this user cannot be found",
    });
  }
  res.status(200).send(userlist);
});

router.post("/login", async (req, res) => {
try{
    const user = await Users.findOne({ email: req.body.email });
    const secret= process.env.SECRET;
    if (!user) {
      return res.status(400).send("this email has not been registered");
    }
    if(user && bcrypt.compareSync(req.body.password,user.passwordHash)){

        // const token =jwt.sign({
        //     user:user.id,
        //     isAdmin:user.isAdmin,
        // },
        // secret,
        // {expiresIn:'1d'})
        return res.status(200).send("logged in")
    }else{
        return res.status(400).send("password is not correct");
    }}
    catch(error){
        console.log(error);
    }
  
});
router.post(`/register`, async (req, res) => {
  let users = new Users({
    name: req.body.name,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
    phone: req.body.phone,
    isAdmin: req.body.isAdmin,
    age: req.body.age,
  });
  
    users = await users.save();

    if (!users) {
      return res.status(400).send("the user cannot be created");
    }

     res.send(users);
});
router.delete("/:id", (req, res) => {
  Users.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (user) {
        return res
          .status(200)
          .json({ success: true, message: "the user is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "user not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});


module.exports = router;
