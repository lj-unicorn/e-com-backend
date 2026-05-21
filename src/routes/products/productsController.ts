import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send("product list");
}

export function listProductsById(req: Request, res: Response) {
  const { price } = req.params;
  res.send(`product with Rs ${price} /- `);
}

export function updateProduct(req: Request, res: Response) {
  const { id } = req.params;
  res.send(`product with ${id} has been updated`);
}

export function addNewProduct(req: Request, res: Response) {
  res.send("new product");
}

export function deleteProduct(req: Request, res: Response) {
  res.send("productDeleted");
}
