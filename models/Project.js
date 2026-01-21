import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['Android', 'Website', 'Software', 'iOS', 'Other'],
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    technologies: {
      type: [String],
      default: [],
    },
    completedDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['Completed', 'In Progress', 'Planned'],
      default: 'Planned',
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
    demoUrl: {
      type: String,
      default: null,
    },
    githubUrl: {
      type: String,
      default: null,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Project', ProjectSchema);
