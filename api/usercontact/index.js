import dbConnect from "../db.js";
import Contact from "../../models/UserContact.js";
import Coupon from "../../models/Coupon.js";

export default async function handler(req, res) {
  await dbConnect();

  try {

    if (req.method === "POST") {
      const { name, email, phone, subject, message, couponCode } = req.body;

      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields",
        });
      }

      let appliedCoupon = null;

      if (couponCode) {
        const coupon = await Coupon.findOne({
          code: couponCode.toUpperCase(),
          isActive: true,
          expiresAt: { $gte: new Date() },
        });

        if (!coupon) {
          return res.status(400).json({
            success: false,
            message: "Invalid or expired coupon",
          });
        }

        if (coupon.usageLimit && coupon.usedCount >= coupon.usageLimit) {
          return res.status(400).json({
            success: false,
            message: "Coupon usage limit exceeded",
          });
        }

        coupon.usedCount += 1;
        await coupon.save();

        appliedCoupon = {
          code: coupon.code,
          discountType: coupon.discountType,
          discountValue: coupon.discountValue,
        };
      }

      const contact = await Contact.create({
        name,
        email,
        phone,
        subject,
        message,
        coupon: appliedCoupon,
      });

      return res.status(201).json({
        success: true,
        message: "Contact message submitted",
        data: contact,
      });
    }

    if (req.method === "GET") {
      const contacts = await Contact.find().sort({ createdAt: -1 });

      return res.status(200).json({
        success: true,
        count: contacts.length,
        data: contacts,
      });
    }

    res.setHeader("Allow", ["GET", "POST"]);
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
