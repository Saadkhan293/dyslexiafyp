const mongoose = require("mongoose");
const UsersSchema = mongoose.Schema({
  name:{
      type:String,
      required:true,
  },
  email:{
      type:String,
      required:true,
    
  },
  passwordHash:{
      type:String,
      required:true,
  },
  phone:{
      type:String,
  },
  isAdmin:{
      type:Boolean,
      default:false,
       
  },
  age:{
      type:String,
      required:true,
  }
});
UsersSchema.virtual('id').get(function(){
    return this._id.toHexString();
})
UsersSchema.set('toJSON',{
    virtuals:true,
})

exports.Users = mongoose.model("users", UsersSchema);
