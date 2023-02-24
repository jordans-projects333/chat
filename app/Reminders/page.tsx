'use client'
import Reminder from "./Reminder";
import { useState, useRef, useEffect } from "react";
import { clientPusher } from "@/ugg";

const Reminders = () => {
    const currentDate = new Date()
    const currentDateString = currentDate.toLocaleDateString(undefined, {month: "short", day: "numeric"});
    const [deleteToggle, setDeleteToggle] = useState(false)
    const [addToggle, setAddToggle] = useState(false)
    const [reminderInput, setReminderInput] = useState('')
    const [monthInput, setMonthInput] = useState('')
    const [dayInput, setDayInput] = useState('')
    const [timeInput, setTimeInput] = useState('')
    const [getReminders, setGetReminders] = useState([])
    
    const setReminder = (e: any) => {
        e.preventDefault()
        setAddToggle(false)
        fetch('api/addReminder',{
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
                reminder: reminderInput,
                month: monthInput,
                day: dayInput,
                time: timeInput
            }),
        })
    }
   useEffect(() => {
    getData()
   }, [])
   const getData = async() => {
    const res = await fetch('api/getReminders',{
        method: 'GET'})
    const {reminders} = await res.json()
    console.log(reminders)
    setGetReminders(reminders)
    
   }
   const channel = clientPusher.subscribe('reminder')
   useEffect(() => {
    channel.bind('new-reminder', async (data : any) => {
        console.log('Pusher was here')
            getData()
        })
    return () => {
        channel.unbind_all()
        channel.unsubscribe()
      }
   }, [clientPusher])
  return (
    <div className='bg-primary min-h-screen flex flex-col relative'>
        <h3 className="text-center text-2xl">{currentDateString}</h3>
        {getReminders.map((reminder: any) => (
            <Reminder textContent={reminder.textContent} dateContent={reminder.dateContent} killId={reminder.killId} key={reminder.killId} setDeleteToggle={setDeleteToggle} deleteToggle={deleteToggle}/>
        ))}
        <div className="w-full duration-300 flex justify-center items-center relative">
            <svg onClick={() => setAddToggle(true)} className={`h-6 ${!addToggle ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"/></svg>
            <form className={`flex duration-300 z-20 justify-center items-center absolute top-0 w-full ${addToggle ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <svg className='h-6 w-6 ml-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"/></svg>
                <input required className='mx-4 ring-1 ring-blue-400' onChange={(e) => setReminderInput(e.target.value)}/>
                <input required className='ml-auto mr-2 ring-1 ring-blue-400 w-4' onChange={(e) => setMonthInput(e.target.value)}/>
                <input required className='mr-2 ring-1 ring-blue-400 w-6' onChange={(e) => setDayInput(e.target.value)}/>
                <input required className='mr-4 ring-1 ring-blue-400 w-8' onChange={(e) => setTimeInput(e.target.value)}/>
                <button type='submit' className="absolute top-[100%] left-[50%] translate-x-[-50%] bg-slate-200 px-4 py-1 rounded-lg mt-4" onClick={(e) => setReminder(e)}>Add reminder</button>
            </form>
        </div>
        <div className={`backdrop-blur-sm duration-300 absolute top-0 w-full h-full ${deleteToggle || addToggle ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onTouchStart={() => {setDeleteToggle(false); setAddToggle(false)}}></div>
    </div>
  )
}

export default Reminders