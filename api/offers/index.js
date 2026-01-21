import dbConnect from "../db.js";
import Coupon from "../../models/Coupon.js";

export default async function handler(req, res) {
  await dbConnect();

  try {
    // ✅ GET ACTIVE OFFER
    if (req.method === "GET") {
      const offer = await Coupon.findOne({ isActive: true }).sort({
        createdAt: -1,
      });

      return res.status(200).json({
        success: true,
        data: offer,
      });
    }

    // ✅ CREATE OFFER / COUPON
    if (req.method === "POST") {
      const {
        title,
        amount,
        couponCode,
        discountType,
        discountValue,
        lottieUrl,
        durationHours,
      } = req.body;

      if (
        !title ||
        !amount ||
        !couponCode ||
        !discountType ||
        !discountValue ||
        !lottieUrl ||
        !durationHours
      ) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields",
        });
      }

      const expiresAt = new Date(
        Date.now() + durationHours * 60 * 60 * 1000
      );

      // Deactivate old offers
      await Coupon.updateMany({}, { isActive: false });

      const offer = await Coupon.create({
        title,
        amount,
        code: couponCode,
        discountType,
        discountValue,
        lottieUrl,
        expiresAt,
        isActive: true,
      });

      return res.status(201).json({
        success: true,
        message: "Offer created successfully",
        data: offer,
      });
    }

    // ✅ DELETE ACTIVE OFFER
    if (req.method === "DELETE") {
      const deletedOffer = await Coupon.findOneAndDelete({ isActive: true });

      if (!deletedOffer) {
        return res.status(404).json({
          success: false,
          message: "No active offer found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Active offer deleted",
        data: deletedOffer,
      });
    }

    res.setHeader("Allow", ["GET", "POST", "DELETE"]);
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} not allowed`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
