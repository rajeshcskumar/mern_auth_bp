import asyncHandler from "express-async-handler"
import User from "../models/userModel.js";
// @desc    Auth user/set token
// route    POST /api/users/auth
// @access  Public    
const authUser = asyncHandler(async (req, res) => {
    res.status(200).send({message: 'Auth User'})
});

// @desc    Register a new user
// route    POST /api/users
// @access  Public    
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body;
    const userExists = await User.findOne({email})
    if(userExists) {
        res.status(400);
        throw new Error("User Already Exists !!");
    }

    const user = await User.create({
        name,
        email,
        password
    });
    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    }else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
});

// @desc    Logout user
// route    POST /api/users/logout
// @access  Public    
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).send({message: 'Logout User'})
});

// @desc    Get the user profile
// route    GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).send({message: 'User Profile'})
});

// @desc    Update the user profile
// route    PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).send({message: 'Update User Profile'})
});


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
}