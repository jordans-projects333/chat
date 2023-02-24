import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
let timerArray = []
import { serverPusher } from '../../ugg'

export default async function handler(req, res) {
    if(req.method === 'POST'){
        const { reminder, month, day, time } = req.body
        const currentTime = new Date()
        const reminderDate = Date.parse(`${day} ${month} 2023 ${time}:00 GMT`)
        const timeBetween = reminderDate - currentTime
        const soup = setTimeout(async () => {
            const startTime = soup._idleStart
            for(let i = 0; i < timerArray.length;i++){
                if(timerArray[i]._idleStart === startTime){
                    const mmm = await prisma.Reminder.delete({ where: {killId: timerArray[i]._idleStart}})
                    serverPusher.trigger('reminder', 'new-reminder', mmm)
                    timerArray.splice(i, 1)
                    return
                }
            }
        }, timeBetween)   
        timerArray.push(soup)
        const note = {
            killId: soup._idleStart,
            textContent: reminder,
            dateContent: `${day} ${month}, ${time}`
        }
        try{
            const noteFromDB = await prisma.Reminder.create({ data: note})
            serverPusher.trigger('reminder', 'new-reminder', noteFromDB)
            console.log(timerArray, 'RAAAAAAAAAAAAAAAAAAAAAAAAAAA')
        } catch (error){
            console.log(error)
        }
    }else if(req.method === 'DELETE'){
        const { killId } = req.body
        console.log('got here egg', killId, timerArray)
        for(let i = 0; i < timerArray.length;i++){
            if(timerArray[i]._idleStart === killId){
                const mmm = await prisma.Reminder.delete({ where: {killId: timerArray[i]._idleStart}})
                serverPusher.trigger('reminder', 'new-reminder', mmm)
                timerArray.splice(i, 1)
                clearTimeout(timerArray[i])
                return
            }
        }
    }else{
        res.status(405).json({body: 'Method not allowed'})
        return
    }
    
     
}