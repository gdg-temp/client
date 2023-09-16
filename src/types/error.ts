import type { HttpStatusCode } from 'axios';

export type ErrorResponse = {
  statusCode: HttpStatusCode;
  message: string;
};
