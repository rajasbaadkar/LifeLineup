import Need from "../models/Need";

// Add a new need
export const addNeed = async (req, res) => {
    try {
      const { recipient, name, bloodType, location, reports } = req.body;
  
      // Create a new need item
      const newNeed = new Need({
        recipient,
        name,
        bloodType,
        location,
        reports,
      });
  
      // Save the new need to the database
      await newNeed.save();
  
      return res.status(201).json({ message: "Need added successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  };
  
  // Delete a need by ID
  export const deleteNeed = async (req, res) => {
    try {
      const { needId } = req.params; // Assuming you pass the need ID as a route parameter
  
      // Find the need in the database by its ID and remove it
      const deletedNeed = await Need.findByIdAndRemove(needId);
  
      if (!deletedNeed) {
        return res.status(404).json({ message: "Need not found" });
      }
  
      return res.status(200).json({ message: "Need deleted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  };
  
  // Get a need by ID
  export const getNeed = async (req, res) => {
    try {
      const { needId } = req.params; // Assuming you pass the need ID as a route parameter
  
      // Find the need in the database by its ID
      const need = await Need.findById(needId);
  
      if (!need) {
        return res.status(404).json({ message: "Need not found" });
      }
  
      return res.status(200).json(need);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  };
  