import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    // Optional custom job code like "web-dev-1"
    jobCode: {
      type: String,
      unique: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Web Development",
        "Mobile Development",
        "Design",
        "Database",
        "Marketing",
      ],
      index: true,
    },

    description: {
      type: String,
      required: true,
    },

    requirements: {
      type: [String],
      required: true,
      default: [],
    },

    experienceLevel: {
      type: String,
      required: true,
      enum: ["All Levels", "Beginner", "Intermediate", "Experienced"],
      index: true,
    },

    location: {
      type: String,
      required: true,
    },

    employmentType: {
      type: String,
      required: true,
      enum: ["Full-time", "Part-time", "Contract", "Internship", "Remote"],
      index: true,
    },

    postedDate: {
      type: Date,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

export default mongoose.models.Job || mongoose.model("Job", JobSchema);
