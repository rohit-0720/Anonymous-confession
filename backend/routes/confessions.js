import express from "express";
import Confession from "../models/Confession.js";

const router = express.Router();

// POST → Add a new confession
router.post("/", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: "Confession text is required" });

    const newConfession = new Confession({ text });
    await newConfession.save();

    res.status(201).json({ message: "Confession added successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// GET → Fetch all confessions
router.get("/", async (req, res) => {
  try {
    const confessions = await Confession.find().sort({ createdAt: -1 });
    res.json(confessions);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;
