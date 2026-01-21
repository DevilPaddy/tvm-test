import dbConnect from "../db.js";
import Project from "../../models/Project.js";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  try {
    
    if (req.method === "PATCH") {
      const updatedProject = await Project.findByIdAndUpdate(
        id,
        { $set: req.body },
        {
          new: true,
          runValidators: true,
        }
      );

      if (!updatedProject) {
        return res.status(404).json({
          success: false,
          message: "Project not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: updatedProject,
      });
    }

   
    if (req.method === "DELETE") {
      const deletedProject = await Project.findByIdAndDelete(id);

      if (!deletedProject) {
        return res.status(404).json({
          success: false,
          message: "Project not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Project deleted successfully",
      });
    }

 
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
