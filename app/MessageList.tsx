'use client'
import useSWR from 'swr'
import { Message } from '../typings'
import MessageBox from './MessageBox'
import fetcher from '../utils/fetchMessages'
import { useEffect } from 'react'
import { clientPusher } from '../ugg'
import { useStore } from '@/zustand/store'

type Props = {
  initialMessages: Message[]
}

function MessageList({initialMessages}: Props) {
  const { editToggle }: any = useStore()
  const { data: messages, error, mutate } = useSWR<Message[]>("/api/getMessages", fetcher)
  useEffect(() => {
    const channel = clientPusher.subscribe('messages')
    channel.bind('new-message', async (data : Message) => {
      if(messages?.find((message) => message.id === data.id))return
      if(!messages){
        mutate(fetcher)
      }else{
        mutate(fetcher, {
          optimisticData: [data, ...messages!],
          rollbackOnError: true,
        })
      }
    })
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages, mutate, clientPusher])
  const cancelEdit = () => {
    useStore.setState((state: { editToggle: boolean }) => ({
      editToggle: state.editToggle = !state.editToggle
    }))
  }
  return (
    <div className='pt-4 overflow-y-auto bg-primary min-h-screen'>
      <div className={`fixed top-0 w-screen z-10 left-0 h-full backdrop-blur-[3px] duration-500 ${editToggle ? 'opacity-1' : 'opacity-0 pointer-events-none'}`} onClick={() => cancelEdit()}></div>
      {(messages || initialMessages).map(message => (
        <MessageBox message={message} key={message.id}/>
    ))}
    </div>
  )
}

export default MessageList