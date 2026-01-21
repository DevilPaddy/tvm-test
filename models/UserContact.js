import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
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

    subject: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },

    // ✅ Coupon / Offer details (optional)
    coupon: {
      code: {
        type: String,
        uppercase: true,
        trim: true,
        default: null,
      },
      discountType: {
        type: String,
        enum: ["percentage", "flat"],
      },
      discountValue: {
        type: Number,
      },
    },

    status: {
      type: String,
      enum: ["new", "read", "replied"],
      default: "new",
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

export default mongoose.model("UserContact", contactSchema);
