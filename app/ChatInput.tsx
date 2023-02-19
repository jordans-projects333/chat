'use client'
import { FormEvent, useState } from "react"
import { Message } from "../typings"
import { v4 as uuid } from 'uuid'
import useSWR from 'swr'
import fetcher from "../Utils/fetchMessages"
import { DefaultSession } from "next-auth"
import { useSession } from "next-auth/react"

function ChatInput() {
  const text = async () => {
    console.log('yo')
   await fetch('/api/text')
  }
  const { data: session} = useSession()
  const [input, setInput] = useState('')
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher)
  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!input)return
    const messageToSend = input
    setInput('')
    const id = uuid()
    const message : Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: session?.user?.name!,
      profilePic: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
      email: session?.user?.email!
    }
    const UploadMessage = async () => {
      const data = await fetch('api/addMessage',{
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({message}),
        }).then(res => res.json())
      return [data.message, ...messages!]
    }
    await mutate(UploadMessage, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    })
  }
  return (
    <form onSubmit={(e) => addMessage(e)} className='fixed bottom-0 z-50 w-full flex px-4 py-2 space-x-2 border-t border-gray-100 bg-white'>
        <input type="text" value={input} placeholder='Enter message here...' onChange={(e) => setInput(e.target.value)}
         className='flex-1 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 
                focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed'/>
        <button onClick={() => text()}><svg className="h-5 pr-4 fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg></button>
        <button type='submit' disabled={!input || session == null} className='bg-blue-500 hover:bg-blue-600 text-white font-bold h-8 w-16 my-auto rounded disabled:opacity-50 disabled:cursor-not-allowed'>Send</button>
    </form>
  )
}

export default ChatInput