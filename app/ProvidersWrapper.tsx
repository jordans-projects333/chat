"use client"
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const primaryColor = localStorage.getItem('--primary')
    if(primaryColor !== null)document.documentElement.style.setProperty('--primary', primaryColor)
  },[])
  return (
    <SessionProvider>
        {children} {/* Our entire app -> has access to NextAuth */}
    </SessionProvider>
  )
}