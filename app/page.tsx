import MessageList from "./MessageList"
import { Message } from "../typings"
import redis from "../redis"

export default async function Home() {
  const messageRes = await redis.hvals('messages')
  const messages : Message[] = messageRes.map((message) => JSON.parse(message)).sort((a, b) => b.created_at - a.created_at)
  return (
    <>
      <MessageList initialMessages={messages}/>
    </>
  )
}
