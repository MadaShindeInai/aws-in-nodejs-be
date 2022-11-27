import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
// import { mockData } from "../../../mockProducts";
import cors from "@middy/http-cors";
import schema from "./schema";

type HandlerType = ValidatedEventAPIGatewayProxyEvent<typeof schema>;

export const handler: HandlerType = async (event) => {
  return formatJSONResponse({
    res: { ...event.body, id: "test" },
    statusCode: 201,
  });
};

export const addProduct = middyfy(handler).use(cors());
