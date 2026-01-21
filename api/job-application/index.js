import formidable from "formidable";
import cloudinary from "../../src/lib/cloudinary.ts";
import dbConnect from "../db.js";
import Application from "../../models/Application.js";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();

      const form = formidable({ multiples: false });

      // Wrap formidable in a promise to use async/await
      const { fields, files } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          else resolve({ fields, files });
        });
      });

      const resume = files.resume?.[0];
      if (!resume) {
        return res.status(400).json({ error: "Resume required" });
      }

      const upload = await cloudinary.uploader.upload(resume.filepath, {
        folder: "job_applications/resumes",
        resource_type: "raw",
      });

      const application = await Application.create({
        fullName: fields.fullName?.[0],
        email: fields.email?.[0],
        phone: fields.phone?.[0],
        jobCategory: fields.jobCategory?.[0],
        experienceLevel: fields.experienceLevel?.[0],
        portfolio: fields.portfolio?.[0] || "",
        message: fields.message?.[0],
        resumeUrl: upload.secure_url,
        resumePublicId: upload.public_id,
      });

      return res.status(201).json(application);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Submission failed" });
    }
  }

  if (req.method === "GET") {
    try {
      await dbConnect();
      const applications = await Application.find().sort({ createdAt: -1 });
      return res.status(200).json(applications);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Fetch failed" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end("Method Not Allowed");
}
