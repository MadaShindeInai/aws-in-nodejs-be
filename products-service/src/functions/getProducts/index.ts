import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.getProducts`,
  events: [
    {
      http: {
        method: "get",
        path: "products",
        cors: true,
        responses: {
          200: {
            description: "Succesful response",
            bodyType: "Products",
          },
        },
      },
    },
  ],
};
