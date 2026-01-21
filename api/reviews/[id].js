import dbConnect from "@/api/dbConnect";
import Review from "@/models/Review";

export default async function handler(req, res) {
  const { id } = req.query;
  await dbConnect();

  if (req.method === "DELETE") {
    try {
      await Review.findByIdAndDelete(id);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end("Method Not Allowed");
  }
}
