import { APIGatewayProxyResult } from "aws-lambda";
import { Product } from "src/types/api-types";
import { handler } from "./handler";

test("test addProduct", async () => {
  const res = (await handler(
    {
      body: {
        count: 3,
        title: "test",
        price: 3,
        description: "222",
      },
    } as any,
    undefined,
    undefined
  )) as APIGatewayProxyResult;
  const product = JSON.parse(res.body) as Product;
  expect(product.id).toBe("test");
});
