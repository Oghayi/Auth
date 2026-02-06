import { User } from '../models/user.models.js';

const registerUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        if ( !name || !email || !password)
        {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        //Check if user already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }
        //Create new user
        const user = await User.create({
            name,
            email: email.toLowerCase(),
            password,
            loggedIn: false,
        });
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        //Checking if user already exist
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User does not exist"
            })
        }
        //Comparing password
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            })
        }
        user.loggedIn = true;
        await user.save();
        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user
        })
    } catch (error) {
        res.status(500).json({message: "Internal server error", error: error});
    }
}

 const logoutUser = async (req, res) => {
   res.status(200).json({ message: "Logged out successfully"});
}

export {
    registerUser,
    loginUser,
    logoutUser
}