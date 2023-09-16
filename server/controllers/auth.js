import bcrypt from "bcrypt";
import User from "../models/User.js"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try{
        const { firstName, lastName, email, password, bloodType, age, gender, city } = req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const user = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            bloodType,
            age,
            gender,
            location:{
                address:city,
            }
        });
        const savedUser = await user.save();
        console.log("successfully worked");
        res.status(201).json(savedUser);
    }
    catch (err) {
        res.status(500).json({error: err.message})
    }
}

/*logging in*/
export const login = async(req,res) => {
    try{
        const {email, password} = req.body
        const user = await User.findOne({email: email});
        if(!user){
            res.status(400).json({msg: "User does not exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({msg: "Invalid Credentials"});

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({token, user});

    } catch(err){
        console.log(err.message);
        res.status(500).json({error : err.message})
    }
}