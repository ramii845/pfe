const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        
      },
      firstName :{
        type: String,
        required: true,
      },
      matricule:{
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      role: [{
        type: String,
        default: "ADMIN",
        roles: ['USER', 'ADMIN'],
    }],
      
    },
    {
      timestamps: true,
    }
  );
  userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  userSchema.methods.matchPassword = async function (enteredPassword,psw) {
    return await bcrypt.compare(enteredPassword, psw);
  };

  const User = mongoose.model("User", userSchema);

module.exports=User;