import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import type { FromSchema } from "json-schema-to-ts";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, "body"> & {
  body: FromSchema<S>;
};
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<
  ValidatedAPIGatewayProxyEvent<S>,
  APIGatewayProxyResult
>;

type Props = {
  res: Record<string, unknown>;
  statusCode?: number;
};

export const formatJSONResponse = ({ res, statusCode = 200 }: Props) => {
  return {
    statusCode,
    body: JSON.stringify(res),
  };
};
