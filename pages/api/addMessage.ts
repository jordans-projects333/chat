import type { NextApiRequest, NextApiResponse } from 'next'
import { serverPusher } from '../../ugg'
import redis from '../../redis'
import { Message } from '../../typings'

type Data = {
    message: Message
}
type Error = {
    body: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
    if(req.method !== 'POST'){
        res.status(405).json({body: 'Method not allowed'})
        return
    }
    const { message } = req.body
    const newMessage = {
        ...message,
        created_at: Date.now()
    }
    await redis.hset('messages', message.id, JSON.stringify(newMessage))
    serverPusher.trigger('messages', 'new-message', newMessage)
    res.status(200).json({ message: newMessage })
}