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
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
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
                default: "/images/avatar-guy.jpg",
            }
        },
        notification: {
            type: [
                {
                    userId: {
                        type: mongoose.Schema.Types.ObjectId,
                        required: true
                    },
                    userName: {
                        type: String,
                        required: true
                    },
                    message: {
                        type: String,
                        required: true,
                        default:"Organ donor found"
                    },
                    image:{
                        type:String,
                        default: "/images/avatar-guy.jpg"
                    }
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
        },
        potentialDonor:{
            type:[
                {
                    userId: {
                        type: mongoose.Schema.Types.ObjectId,
                        required: true
                    },
                    userName: {
                        type: String,
                        required: true
                    },
                    location: {
                        type: String,
                        required: true,
                    },
                    image:{
                        type:String,
                        default: "/images/avatar-guy.jpg"
                    }
                }
            ],
            default:[]
        }

    },
{ timestamps: true }
);

const User = mongoose.model("User", UserSchema)
export default User;