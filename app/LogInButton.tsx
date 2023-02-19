'use client'
import { signIn } from "next-auth/react"
import Link from "next/link"

function LogInButton() {
  return (
    <button type="button" className="px-4 py-1 bg-blue-400 rounded-md ml-auto mr-2"> <Link href={'auth/signin'}>Sign in</Link></button>
  )
}

export default LogInButton