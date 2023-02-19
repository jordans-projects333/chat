import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';
export default function sendMessage(req: NextApiRequest, res: NextApiResponse) {
  const accountSid = <string>process.env.ACCOUNT_SID;
  const token = <string>process.env.AUTH_TOKEN;
  console.log((process.env.ACCOUNT_SID))
  const client = twilio(accountSid, token);
  // const { phone, message } = req.body;
  // console.log(phone, message);
  client.messages
    .create({
      body: 'https://chat-jordans-projects333.vercel.app , youve been sent a message',
      from: '+16075645663',
      to: '+447720861605',
    })
    .then((message) =>
      res.json({
        success: true,
      })
    )
    .catch((error) => {
      console.log(error);
      res.json({
        success: false,
      });
    });
}