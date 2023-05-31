const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: '../configuration/config.env' })

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
}

const registerUser = async (req, res) => {
    try {
        const user = await userModel.create(req.body)
        const token = signToken(user._id)

        console.log(req.body);
        res.status(201).json({
            message: "successful",
            token,
            data: {
                userData: user
            }
        })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const user = await userModel.findByCredentials(req.body.email, req.body.password);
        // Check if user is confirm
        res.status(200).send({ message: user });

    } catch (e) {
        res.status(400).send({ message: e });
    }
}


module.exports = { registerUser, loginUser }