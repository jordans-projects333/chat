import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
      if(req.method !== 'GET'){
          res.status(405).json({body: 'Method not allowed'})
          return
      }
      console.log('GOT HIS FAR')
      try {
          const reminders = await prisma.Reminder.findMany()
          console.log(reminders)
          return res.status(200).json({reminders})
      } catch (error) {
          console.log(error)
          return res.status(500)
      }
  }