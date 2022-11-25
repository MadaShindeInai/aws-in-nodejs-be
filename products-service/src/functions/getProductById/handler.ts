import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { mockData } from "../../../mockProducts";
import schema from "./schema";

type HandlerType = ValidatedEventAPIGatewayProxyEvent<typeof schema>;

export const handler: HandlerType = async (event) => {
  return formatJSONResponse(mockData.at(0));
};

export const getProductById = middyfy(handler);
