import Pusher from 'pusher'
import ClientPusher from 'pusher-js'

export const serverPusher = new Pusher({
    appId: "1554990",
    key: "405a15fbfa721ce7be5d",
    secret: process.env.PUSHER_SECRET!,
    cluster: "eu",
    useTLS: true
  });

export const clientPusher = new ClientPusher('405a15fbfa721ce7be5d', {
    cluster: 'eu',
  });