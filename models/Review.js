import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    companyName: {
      type: String,
      default: "",
    },

    serviceUsed: {
      type: String,
      enum: [
        "Website Development",
        "Android App Development",
        "Digital Marketing",
        "Influencer Marketing",
      ],
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    review: {
      type: String,
      required: true,
    },

    isApproved: {
      type: Boolean,
      default: false, // 👈 admin approval flow
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

// Ensure no model overwrite in dev
export default mongoose.models.Review ||
  mongoose.model("Review", ReviewSchema);
