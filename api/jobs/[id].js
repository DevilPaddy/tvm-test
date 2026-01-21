import dbConnect from "../db.js";
import Job from "../../models/Job.js";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { id } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid job ID",
    });
  }

  await dbConnect();

  try {
    // UPDATE JOB
    if (req.method === "PATCH") {
      const updatedJob = await Job.findByIdAndUpdate(
        id,
        { $set: req.body },
        {
          new: true,
          runValidators: true,
        }
      );

      if (!updatedJob) {
        return res.status(404).json({
          success: false,
          message: "Job not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: updatedJob,
      });
    }

    // DELETE JOB
    if (req.method === "DELETE") {
      const deletedJob = await Job.findByIdAndDelete(id);

      if (!deletedJob) {
        return res.status(404).json({
          success: false,
          message: "Job not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Job deleted successfully",
      });
    }

    // METHOD NOT ALLOWED
    res.setHeader("Allow", ["PATCH", "DELETE"]);
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} not allowed`,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
