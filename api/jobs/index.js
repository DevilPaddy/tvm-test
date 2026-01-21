import dbConnect from "../db.js";
import Job from "../../models/Job.js";

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
        try {
            const jobs = await Job.find().sort({ createdAt: -1 });

            return res.status(200).json({ success: true, data: jobs });
        }
        catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    }

    else if (req.method === 'POST') {
        try {
            const jobs = await Job.create({ ...req.body });

            return res.status(200).json({ success: true, data: jobs });
        }
        catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    }

    else {
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end("Method Not Allowed");
    }
}