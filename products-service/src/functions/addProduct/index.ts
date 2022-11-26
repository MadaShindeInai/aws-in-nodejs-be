import schema from "./schema";
import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.addProduct`,
  events: [
    {
      http: {
        method: "post",
        path: "product",
        cors: true,
        bodyType: "AddProductBody",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
        responses: {
          200: {
            description: "Succesful response",
            bodyType: "Product",
          },
        },
      },
    },
  ],
};
