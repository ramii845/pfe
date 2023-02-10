const User=require('../models/userModel');
const asyncHandler = require('express-async-handler');
const generateToken =require('../utils/generateToken');
const { use } = require('express/lib/application');


const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
    const { name, firstName, email, matricule, password,role } = req.body;
  
    const userExists = await User.findOne({ matricule });
  
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
  
    const user = await User.create({
      name,
      firstName,
      email,
      matricule,
      password,
      role,
      
    });
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        firstName:user.firstName,
        role: user.role,
        token : generateToken(user._id)        
        
       
      });
    } else {
      res.status(400);
      throw new Error("User not found");
    }
  });
  const authUser = asyncHandler(async (req, res) => {
    const { matricule, password } = req.body;
  
  
    const user = await User.findOne({ matricule });
  
    if (user && (await user.matchPassword(password,user.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        matricule: user.matricule,
        token : generateToken(user._id)
        
      });
    } else {
      res.status(400);
      throw new Error("Invalid matricule or Password");
    }
  });
     const getUser = (req, res) => {
    res.send(req.user);
  };

  
module.exports={registerUser,authUser,getUser};
