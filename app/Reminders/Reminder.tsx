'use client'
import {useEffect, useRef} from 'react'

const Reminder = ({setDeleteToggle, deleteToggle, textContent, dateContent, killId}: any) => {
    let timerRef = useRef<any>(null);
    let reminderElement = useRef<any>(null)
    let deleteElement = useRef<any>(null)
    const messageTouchStart = (e: any) => {
        timerRef.current = setTimeout(()=>{
            reminderElement.current.style.zIndex = 20
            reminderElement.current.style.scale = 1.05
            deleteElement.current.style.pointerEvents = 'auto'
            deleteElement.current.style.opacity = 1
            setDeleteToggle(true)
        },1500);
    }
    const messageTouchEnd = () => {
        clearTimeout(timerRef.current)
    }
    const deleteReminder = (killId: any) => {
        setDeleteToggle(false)
        clearTimeout(timerRef.current)
        reminderElement.current.remove()
        fetch('api/addReminder',{
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
                killId: killId,
            }),
        })
    }
    useEffect(() => {
        if(reminderElement.current.style.zIndex == 20 && deleteToggle === false){
            reminderElement.current.style.zIndex = 0
            reminderElement.current.style.scale = 1
            deleteElement.current.style.pointerEvents = 'none'
            deleteElement.current.style.opacity = 0
        }
    }, [deleteToggle])
  return (
    <div ref={reminderElement} className='flex relative duration-300 select-none justify-center items-center mb-4' onTouchStart={(e) => messageTouchStart(e)} onTouchEnd={() => messageTouchEnd}>
        <svg className='h-6 w-6 ml-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"/></svg>
        <h3 className='mx-4'>{textContent}</h3>
        <h3 className='ml-auto mr-4 whitespace-nowrap'>{dateContent}</h3>
        <button onClick={() => deleteReminder(killId)} ref={deleteElement} className="absolute duration-300 top-[100%] left-8 bg-slate-200 px-4 py-1 rounded-lg opacity-0 pointer-events-none">Delete?</button>
    </div>
  )
}

export default Reminder