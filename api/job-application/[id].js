import cloudinary from "../../src/lib/cloudinary.ts";
import dbConnect from "../db.js";
import Application from "../../models/Application.js";

export default async function handler(req, res) {

  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await dbConnect();

    const { id } = req.query;

    const application = await Application.findById(id);
    if (!application) {
      return res.status(404).json({ error: "Application not found" });
    }

    // Delete resume from Cloudinary
    await cloudinary.uploader.destroy(application.resumePublicId, {
      resource_type: "raw",
    });

    // Delete DB record
    await application.deleteOne();

    return res.status(200).json({ message: "Application deleted" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Delete failed" });
  }
}
