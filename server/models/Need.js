import mongoose from "mongoose";

const NeedSchema = new mongoose.Schema(
    {
        recipient:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        name: {
            type: "String",
            enum: ["Kidney", "Liver", "Lungs", "Heart", "Pancreas", "Eye", "Bone Marrow", "Skin"],
            required: true
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
        reports: {
            type: [],
            default: []
        },

    }
);

const Need = mongoose.model("Need", NeedSchema)
export default Need;