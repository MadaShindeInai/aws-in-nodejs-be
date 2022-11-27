import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { mockData } from "../../../mocks";
import cors from "@middy/http-cors";
import { APIGatewayEvent } from "aws-lambda";

export const handler = async (event: Partial<APIGatewayEvent>) => {
  const report = mockData.find((i) => i.id === event.queryStringParameters.id);
  if (!report)
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "No data" }),
    };
  return formatJSONResponse({
    res: mockData.find((i) => i.id === event.queryStringParameters.id),
  });
};

export const getProductById = middyfy(handler).use(cors());
