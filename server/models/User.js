import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 30,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 30,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50
        },
        password: {
            type: String,
            required: true,
            min: 6
        },
        bloodType: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        pictureUrl: {
            public_id: {
                type: String,
                default: "",
            },
            url: {
                type: String,
                default: "",
            }
        },
        notification: {
            type: [
                {
                    userName: {
                        type: String,
                        required: true
                    },
                    title: {
                        type: String,
                        required: true,
                        default:"Organ donor found"
                    },
                }
            ],
            default: []
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
        isDonor: {
            type: Boolean,
            required: true,
            default: false
        },
        medicalHistory:{
            type: String,
            default:"No medical history found"
        }

    },
{ timestamps: true }
);

const User = mongoose.model("User", UserSchema)
export default User;