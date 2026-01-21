import cloudinary from "../../src/lib/cloudinary.ts";
import dbConnect from "../db.js";
import Application from "../../models/Application.js";

export default async function handler(req, { params }) {

  if (req.method !== "DELETE") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    await dbConnect();

    const application = await Application.findById(params.id);
    if (!application) {
      return new Response(
        JSON.stringify({ error: "Application not found" }),
        { status: 404 }
      );
    }

    await cloudinary.uploader.destroy(application.resumePublicId, {
      resource_type: "raw",
    });

    await application.deleteOne();

    return new Response(
      JSON.stringify({ message: "Application deleted" }),
      { status: 200 }
    );

  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Delete failed" }),
      { status: 500 }
    );
  }
}
