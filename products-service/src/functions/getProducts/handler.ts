import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { mockData } from "../../../mockProducts";

export const handler = async (event) => {
  return formatJSONResponse({
    products: mockData,
  });
};

export const getProducts = middyfy(handler);
