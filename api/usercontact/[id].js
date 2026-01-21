import dbConnect from "../db.js";
import Contact from "../../models/Contact.js";

export default async function handler(req, res) {
  await dbConnect();

  try {

    if (req.method === "GET") {
      const contact = await Contact.findById(req.query.id);

      if (!contact) {
        return res.status(404).json({
          success: false,
          message: "Contact not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: contact,
      });
    }

    if (req.method === "PATCH") {
      const updatedContact = await Contact.findByIdAndUpdate(
        req.query.id,
        { $set: req.body },
        {
          new: true,
          runValidators: true,
        }
      );

      return res.status(200).json({
        success: true,
        data: updatedContact,
      });
    }

    res.setHeader("Allow", ["GET", "PATCH"]);
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} not allowed`,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID",
    });
  }
}
