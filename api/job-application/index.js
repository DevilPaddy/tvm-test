import formidable from "formidable";
import cloudinary from "../../src/lib/cloudinary.js";
import { connectDB } from "../../src/lib/db.js";
import Application from "../../src/lib/models/Application.js";

export const config = {
  api: {
    bodyParser: false, 
  },
};

export default async function handler(req, res) {

  if (req.method === "POST") {
    try {
      await connectDB();

      const form = formidable({ multiples: false });

      form.parse(req, async (err, fields, files) => {
        if (err) {
          return res.status(400).json({ error: "Form parsing failed" });
        }

        const resume = files.resume;
        if (!resume) {
          return res.status(400).json({ error: "Resume required" });
        }

        // Upload to Cloudinary
        const upload = await cloudinary.uploader.upload(resume.filepath, {
          folder: "job_applications/resumes",
          resource_type: "raw",
        });

        const application = await Application.create({
          fullName: fields.fullName,
          email: fields.email,
          phone: fields.phone,
          jobCategory: fields.jobCategory,
          experienceLevel: fields.experienceLevel,
          portfolio: fields.portfolio || "",
          message: fields.message,
          resumeUrl: upload.secure_url,
          resumePublicId: upload.public_id,
        });

        return res.status(201).json(application);
      });

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Submission failed" });
    }
  }

  if (req.method === "GET") {
    try {
      await connectDB();
      const applications = await Application.find().sort({ createdAt: -1 });
      return res.status(200).json(applications);
    } catch {
      return res.status(500).json({ error: "Fetch failed" });
    }
  }

  return res.status(405).end("Method Not Allowed");
}
