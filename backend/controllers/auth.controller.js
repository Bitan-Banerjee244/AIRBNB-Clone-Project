import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateToken from "../utils/token.js";

export const signUp = async (req, res) => {
    try {
        let { userName, email, password } = req.body;

        if ([userName, email, password].some(field => !field || field.trim() === "")) {
            return res.status(400).json({
                success: false,
                error: "All Fields must be filled"
            })
        }

        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).json({
                success: false,
                error: "User Already Exists"
            })
        }

        let hashPassword = await bcrypt.hash(password, 10);

        let user = await User.create({
            userName, email, password: hashPassword
        })

        let token = await generateToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            success: true,
            message: "User Created Successfully!",
            user
        })

    } catch (error) {
        console.log(`Sign Up Error : ${error}`)
        return res.status(400).json({
            success: false,
            error: error,
            message: "Sign Up Error"
        })
    }
}

export const login = async (req, res) => {
    try {
        let { email, password } = req.body;

        if ([email, password].some(field => !field || field.trim() === "")) {
            return res.status(400).json({
                success: false,
                error: "All Fields must be filled"
            })
        }

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                error: "User not found"
            });
        }

        let isCorrectPassword = await bcrypt.compare(password, existingUser.password);
        if (!isCorrectPassword) {
            return res.status(401).json({
                success: false,
                error: "Invalid credentials"
            });
        }


        let token = await generateToken(existingUser._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            success: true,
            message: "User Logged In Successfully!",
            user:existingUser
        })
    } catch (error) {
        console.log(`Log in Error : ${error}`)
        return res.status(400).json({
            success: false,
            error: error,
            message: "Log In Error"
        })
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({
            success: true,
            message: "User Logged Out !"
        })
    } catch (error) {
        console.log(`Log Out Error : ${error}`);
        return res.status(400).json({
            success: false,
            error: error,
            message: "Log Out Error"
        })
    }
}
