import { request } from "express"
import User from "../models/user.model.js"
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body

    if (!username || !email || !password || username === '' || email === '' || password === '') 
    {
        return res.status(400).json({ message: "All fields must be filled"}) // prevents user from submitting empty fields
    }

        const hashedPassword = bcryptjs.hashSync(password, 10)

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        })
        // Error Handling to make sure we have a unique username
        try {
            await newUser.save();
        res.json("Signup Successful")
        }catch (error) {
            next(error);
        }
    }

