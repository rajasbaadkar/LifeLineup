import User from "../models/User.js";
import Need from "../models/Need.js";
import Inventory from "../models/Inventory.js";
import mailer from "../utils/sendMail.js";

export const addOrgan = async (req, res) => {
    try {
        const { donorId, name, reports, isAvailable, location, bloodType } = req.body;
        const newOrgan = new Inventory({
            donorId,
            name,
            reports,
            isAvailable,
            location,
            bloodType
        });
        await newOrgan.save();

        const matchingRecipients = await Need.find({
            name,
            bloodType,
        });

        const emails = [];
        const notifications = matchingRecipients.map(
          (recipient) => ({
            recipientId: recipient.recipient,
            message: `An organ matching your criteria (${name}, ${bloodType}) is available.`,
          }),
          emails.push(recipient.email)
        );

        const mailOptions = {
          from: "LifeLineUp",
          to: emails,
          subject: "Potential Organ Donor Found!!",
          text: "A new donor has listed an organ up for donation that is a potential match as per your request.",
        };
        mailer(mailOptions);
        
        for (const notification of notifications) {
            const recipientUser = await User.findById(notification.recipientId);

            if (recipientUser) {
                recipientUser.notification.push({UserName:name, UserId:donorId, message});
                await recipientUser.save();
            }
        }

        const organs = await Inventory.find();
        return res.status(201).json(organs);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
}

// Remove an item from the inventory by ID
export const removeOrganFromInventory = async (req, res) => {
    try {
      const { itemId } = req.params;
      await Inventory.findByIdAndDelete(itemId);
      const organs = await Inventory.find();
      return res.status(200).json(organs);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
};

// Search for items in the inventory by organ name
export const searchInventoryByOrganName = async (req, res) => {
    try {
      const { organName } = req.params; // Assuming you pass the organ name as a route parameter
  
      // Use a regular expression to perform a case-insensitive search for items by organ name
      const inventoryItems = await Inventory.find({
        name: { $regex: new RegExp(organName, "i") }, // "i" flag for case-insensitive search
      });
  
      return res.status(200).json(inventoryItems);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  };
  
  