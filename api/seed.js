import dbConnect from "./db.js";
import { jobListings } from "../src/data/jobListings.ts";
import { projects } from '../src/data/projects.js';
import { contactData } from '../src/data/contactData.ts'
import { reviews } from '../src/data/reviewsData.ts'

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Only POST allowed" });
    }

    try {
        const mongooseInstance = await dbConnect();

        const db = mongooseInstance.connection.db;

        console.log("Connected to DB...");

        await db.collection("jobs").deleteMany({});
        await db.collection("projects").deleteMany({});
        await db.collection("contact").deleteMany({});
        await db.collection("reviews").deleteMany({});

        await db.collection("jobs").insertMany(jobListings);
        await db.collection("projects").insertMany(projects);
        await db.collection("contact").insertOne(contactData);
        await db.collection("reviews").insertMany(reviews);

        res.status(200).json({
            message: "✅ Database seeded successfully",
            jobs: jobListings.length,
            projects: projects.length,
            contact: contactData.length,
            reviews: reviews.length,
        });
    } catch (error) {
        console.error("Seeding Error:", error);
        res.status(500).json({ error: "Seeding failed", details: error.message });
    }
}