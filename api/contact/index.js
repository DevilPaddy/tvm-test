import dbConnect from "../db.js";
import Contact from "../../models/Contact.js";

export default async function handler(req, res) {
  await dbConnect();

  try {
    // ✅ GET CONTACT (SINGLE RECORD)
    if (req.method === "GET") {
      const contact = await Contact.findOne({});
      return res.status(200).json({
        success: true,
        data: contact,
      });
    }

    // ✅ UPDATE CONTACT (SINGLE RECORD)
    if (req.method === "PATCH") {
      const updatedContact = await Contact.findOneAndUpdate(
        {},
        { $set: req.body },
        {
          new: true,
          runValidators: true,
          upsert: true,
        }
      );

      return res.status(200).json({
        success: true,
        data: updatedContact,
      });
    }

    // ❌ METHOD NOT ALLOWED
    res.setHeader("Allow", ["GET", "PATCH"]);
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
