import redis from '@/redis'

export default async function handler(req, res) {
      if(req.method !== 'POST'){
          res.status(405).json({body: 'Method not allowed'})
          return
      }
      const { editedMessage, initialMessage } = req.body
      console.log(editedMessage, initialMessage)
    //   const messageRes = await redis.hvals('messages')
    //   const messages = messageRes.map((message) => JSON.parse(message)).sort((a, b) => b.created_at - a.created_at)
      
      res.status(200)
  }