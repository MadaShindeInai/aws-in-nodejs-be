import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { mockData } from "../../../mocks";
import cors from "@middy/http-cors";

export const handler = async () => {
  return formatJSONResponse({
    products: mockData,
  });
};

export const getProducts = middyfy(handler).use(cors());
