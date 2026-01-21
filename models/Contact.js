import mongoose from "mongoose";

const SocialLinkSchema = new mongoose.Schema(
  {
    platform: {
      type: String,
      enum: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const WorkingHoursSchema = new mongoose.Schema(
  {
    days: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const ContactSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
    },

    workingHours: {
      type: WorkingHoursSchema,
      required: true,
    },

    socials: {
      type: [SocialLinkSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
