import { Products } from "src/types/api-types";
import { handler } from "./handler";

test("test getProductsHandler", async () => {
  const res = await handler();
  const { products } = JSON.parse(res.body) as { products: Products };
  expect(Array.isArray(products)).toBe(true);
});
