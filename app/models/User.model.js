const { Schema, model } = require("mongoose");

const userSchema = new Schema({
   "firstName": {
     type: String,
     required: true
   },
   secondName: {
    type: String,
    required: true
   },
   email: {
    type: String,
     required: true,
     unique: true
   },
   password: {
      type: String,
     required: true
   },
   curr_status: {
    type: String,
     required: true
   },
   token: {
    type: String,
     required: true
   },
   courses_enrolled_in: {
     type: Array,
     default: []
   },
   manager: {
    type: Boolean,
    default: false
   }
})
const User = model("User", userSchema);

module.exports = User;