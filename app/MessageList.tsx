'use client'
import useSWR from 'swr'
import { Message } from '../typings'
import MessageBox from './MessageBox'
import fetcher from '../Utils/fetchMessages'
import { useEffect } from 'react'
import { clientPusher } from '../pusher'

type Props = {
  initialMessages: Message[]
}

function MessageList({initialMessages}: Props) {
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
  return (
    <div>
      {(messages || initialMessages).map(message => (
        <MessageBox message={message} key={message.id}/>
    ))}
    </div>
  )
}

export default MessageList