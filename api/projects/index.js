import dbConnect from '../db.js';
import Project from '../../models/Project.js'

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
        try {
            const projects = await Project.find().sort({ createdAt: -1 });

            res.status(200).json({ success: true, data: projects });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }

    else if (req.method === 'POST') {
        try {
            const projects = await Project.create({ ...req.body });

            res.status(200).json({ success: true, data: projects });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }

    else {
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end("Method Not Allowed");
    }
}