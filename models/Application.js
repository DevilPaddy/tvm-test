import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    phone: {
        type: String,
        trim: true,
        default: "",
    },
    jobCategory: {
        type: String,
        required: true
    },
    experienceLevel: {
        type: String,
        required: true
    },
    portfolio: {
        type: String
    },
    message: {
        type: String,
        required: true
    },
    resumeUrl: {
        type: String,
        required: true
    },
},
    { timestamps: true }
);

export default mongoose.model('Application', ApplicationSchema);