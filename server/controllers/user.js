import User from "../models/User.js";
import Inventory from "../models/Inventory.js";

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const updateProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const { age, longitude, latitude, address, isDonor, medicalHistory } = req.body;
        const updatedUser = await User.findByIdAndUpdate(id, {
            age,
            location: {
                longitude,
                latitude,
                address
            },
            isDonor,
            medicalHistory
        }, { new: true });
        res.status(200).json(updatedUser);

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        console.log(err.message)
        res.status(404).json({ message: err.message });
    }
}

export const deleteUserNotification = async(req,res) => {
    try{
        const {id, notificationid} = req.params;
        const user = await User.findById(id);
        const newNotifications = user.notification.filter(notification => notification._id.toString() !== notificationid.toString());
        const updatedUser = await User.findByIdAndUpdate(id, {notification: newNotifications}, {new: true});
        res.status(200).json(updatedUser);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
}

export const addPotentialDonor = async(req,res) => {
    try {
        const { id } = req.params; 
        const { userName, location, userId } = req.body;
        const user = await User.findById(id);
    
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
    
        const newDonor = { userId, userName, location };
    
        user.potentialDonor.push(newDonor);
    
        await user.save();
    
        return res.status(201).json({ message: "Potential donor added successfully" });
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

