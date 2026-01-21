import dbConnect from "../db.js";
import Review from "../../models/Review.js";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      // Only approved reviews for frontend
      const reviews = await Review.find({ isApproved: true })
        .sort({ createdAt: -1 });

      res.status(200).json({ success: true, data: reviews });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  else if (req.method === "POST") {
    try {
      const review = await Review.create({
        ...req.body,
        isApproved: false, 
      });

      res.status(201).json({ success: true, data: review });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end("Method Not Allowed");
  }
}
