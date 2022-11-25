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
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
