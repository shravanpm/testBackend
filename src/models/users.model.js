const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        mobile: {type: Number, required: true},
        name: {type: String, required: false},
        email: {type: String, required: false},
        otp: {type: Number, required: false, default: 1234}
    },
    {
        versionKey: false,
        timestamps: true
    }
);

// userSchema.pre("save", function() {
//     const hash = bcrypt.hashSync(this.password, 12);
//     this.password = hash;
//     return next();
// });

userSchema.methods.checkOtp = (inputOtp) => {
    // bcrypt.compareSync(inputOtp, this.otp);
    return inputOtp == this.otp;
}

const User = mongoose.model("user",userSchema);
module.exports = User;