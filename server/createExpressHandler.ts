import "dotenv/config";
import { Request, Response } from "express";
import { ServerlessContext, ServerlessFunction } from "./types";
import Twilio from "twilio";

const { REACT_APP_TWILIO_ENVIRONMENT } = process.env;

const twilioClient = Twilio(
  "SK6065504d8e29e45ccbf6afbb3ef8d6bf",
  "c4K8MZocUeinLXwRUzeNIUXGQXA4SP2A",
  {
    accountSid: "AC12927ea8cd01a94f93efb68d06748c66",
    region:
      REACT_APP_TWILIO_ENVIRONMENT === "prod"
        ? undefined
        : REACT_APP_TWILIO_ENVIRONMENT,
  }
);

const context: ServerlessContext = {
  ACCOUNT_SID: "AC12927ea8cd01a94f93efb68d06748c66",
  TWILIO_API_KEY_SID: "SK6065504d8e29e45ccbf6afbb3ef8d6bf",
  TWILIO_API_KEY_SECRET: "c4K8MZocUeinLXwRUzeNIUXGQXA4SP2A",
  ROOM_TYPE: "group",
  CONVERSATIONS_SERVICE_SID: "ISa1e83e0698cb47939eef446cd4388fe8",
  getTwilioClient: () => twilioClient,
};

export function createExpressHandler(serverlessFunction: ServerlessFunction) {
  return (req: Request, res: Response) => {
    serverlessFunction(context, req.body, (_, serverlessResponse) => {
      const { statusCode, headers, body } = serverlessResponse;

      res
        .status(statusCode)
        .set(headers)
        .json(body);
    });
  };
}
