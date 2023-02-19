'use client'
import { getProviders, signIn } from "next-auth/react"

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>
}

function SignIn({providers}: Props) {
  
  return (
    <div className="flex flex-col justify-center items-center">
      {Object.values(providers!).map((provider) => (
        <div key={provider.name}>
            <button className="mb-4 border-black border px-4 py-1 rounded-sm" onClick={() => signIn(provider.id, {
                callbackUrl: `/`,
            })}>
                Sign in with {provider.name}
            </button>
        </div>
    ))}
  </div>
  )
}

export default SignIn