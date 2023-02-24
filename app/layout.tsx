import './globals.css'
import ProvidersWrapper from './ProvidersWrapper'
import ChatInput from './ChatInput'
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ProvidersWrapper>
          <Header/>
          {children}
          <ChatInput />
        </ProvidersWrapper>
      </body>
    </html>
  )
}
