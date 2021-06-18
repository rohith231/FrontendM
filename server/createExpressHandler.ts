import 'dotenv/config';
import { Request, Response } from 'express';
import { ServerlessContext, ServerlessFunction } from './types';
import Twilio from 'twilio';

const {
  REACT_APP_TWILIO_ENVIRONMENT,
} = process.env;

const twilioClient = Twilio('SK18233076d87af15cacbd81bafffc9dc6', '6jX9cNLTBwkDUpeRVmreat5uxVCfm2Ry', {
  accountSid: 'AC7212e3ea5d4204d27e2a782fd05950e5',
  region: REACT_APP_TWILIO_ENVIRONMENT === 'prod' ? undefined : REACT_APP_TWILIO_ENVIRONMENT,
});

const context: ServerlessContext = {
  ACCOUNT_SID: 'AC7212e3ea5d4204d27e2a782fd05950e5',
  TWILIO_API_KEY_SID:'SK18233076d87af15cacbd81bafffc9dc6',
  TWILIO_API_KEY_SECRET:'6jX9cNLTBwkDUpeRVmreat5uxVCfm2Ry',
  ROOM_TYPE: 'group',
  CONVERSATIONS_SERVICE_SID: 'IS43d6dbe9027e4f8390354d306f6f4ada',
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
