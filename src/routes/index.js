import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Express server" });
});

export default router;
