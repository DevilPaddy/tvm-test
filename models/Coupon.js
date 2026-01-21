import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
  {
    // Used by contact form
    code: {
      type: String,
      required: true,
      uppercase: true,
      unique: true,
      trim: true,
    },

    discountType: {
      type: String,
      enum: ["percentage", "flat"],
      required: true,
    },

    discountValue: {
      type: Number,
      required: true,
    },

    // Offer UI fields
    title: String,
    amount: String,
    lottieUrl: String,

    // Status & validity
    isActive: {
      type: Boolean,
      default: true,
    },

    expiresAt: {
      type: Date,
      required: true,
    },

    usageLimit: Number,
    usedCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Coupon", couponSchema);
