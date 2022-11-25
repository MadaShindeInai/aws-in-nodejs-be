import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { mockData } from "../../../mockProducts";
import cors from "@middy/http-cors";

export const handler = async (event) => {
  const report = mockData.find((i) => i.id === event.queryStringParameters.id);
  if (!report)
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "No data" }),
    };
  return formatJSONResponse(
    mockData.find((i) => i.id === event.queryStringParameters.id)
  );
};

export const getProductById = middyfy(handler).use(cors());
