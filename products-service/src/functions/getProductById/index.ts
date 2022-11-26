import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.getProductById`,
  events: [
    {
      http: {
        method: "get",
        path: "product",
        cors: true,
        responses: {
          200: {
            description: "Succesful response",
            bodyType: "Product",
          },
          404: {
            description: "Not found",
            bodyType: "Body404Type",
          },
        },
        request: {
          parameters: {
            querystrings: {
              id: true,
            },
          },
        },
      },
    },
  ],
};
