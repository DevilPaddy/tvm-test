import cloudinary from "../../src/lib/cloudinary.ts";
import dbConnect from "../db.js";
import Application from "../../models/Application.js";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req) {

  if (req.method === "POST") {
    try {
      await dbConnect();

      const formData = await req.formData();
      const resume = formData.get("resume");

      if (!resume) {
        return new Response(
          JSON.stringify({ error: "Resume is required" }),
          { status: 400 }
        );
      }

      const buffer = Buffer.from(await resume.arrayBuffer());
      const base64File = `data:${resume.type};base64,${buffer.toString("base64")}`;

      const upload = await cloudinary.uploader.upload(base64File, {
        folder: "job_applications/resumes",
        resource_type: "raw",
      });

      const application = await Application.create({
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        jobCategory: formData.get("jobCategory"),
        experienceLevel: formData.get("experienceLevel"),
        portfolio: formData.get("portfolio"),
        message: formData.get("message"),
        resumeUrl: upload.secure_url,
        resumePublicId: upload.public_id,
      });

      return new Response(JSON.stringify(application), { status: 201 });

    } catch (err) {
      console.error(err);
      return new Response(
        JSON.stringify({ error: "Application submission failed" }),
        { status: 500 }
      );
    }
  }

  if (req.method === "GET") {
    try {
      await dbConnect();
      const applications = await Application.find().sort({ createdAt: -1 });
      return new Response(JSON.stringify(applications), { status: 200 });
    } catch (err) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch applications" }),
        { status: 500 }
      );
    }
  }

  return new Response("Method Not Allowed", { status: 405 });
}
