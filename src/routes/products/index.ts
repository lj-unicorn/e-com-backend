import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("product list");
});
router.get("/:price", (req, res) => {
  const { price } = req.params;
  res.send(`product with Rs ${price} /- `);
});

router.post("/", (req, res) => {
  res.send("new product");
});

export default router;
