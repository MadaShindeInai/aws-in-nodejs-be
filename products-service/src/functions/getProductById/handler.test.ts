import { Body404Type, Product } from "src/types/api-types";
import { handler } from "./handler";

test("test getProductById 404", async () => {
  const event2 = {
    queryStringParameters: { id: "45678" },
  };
  const res = await handler(event2);
  const product = JSON.parse(res.body) as Body404Type;
  expect(typeof product.message).toBe("string");
});

test("test getProductById 200", async () => {
  const event1 = {
    queryStringParameters: { id: "4" },
  };
  const res = await handler(event1);
  const product = JSON.parse(res.body) as Product;
  expect(product.id).toBe("4");
});
