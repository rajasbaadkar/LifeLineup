import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
    {
        donorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        name: {
            type: "String",
            enum: ["Kidney", "Liver", "Lungs", "Heart", "Pancreas", "Eye", "Bone Marrow", "Skin"],
            required: true
        },
        reports: {
            type: [],
            default: []
        },
        isAvailable: {
            type: Boolean,
            required: true,
            default: true
        },
        bloodType: {
            type: String,
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            required: true
        },
        location: {
            type: {
                longitude: {
                    type: String,
                    default: ""
                },
                latitude: {
                    type: String,
                    default: ""
                },
                address: {
                    type: String,
                    default: ""
                }
            },
            required: true
        },

    },
    { timestamps: true }
);

const Inventory = mongoose.model("Inventory", inventorySchema)
export default Inventory;