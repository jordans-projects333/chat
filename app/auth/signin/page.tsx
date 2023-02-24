import { getProviders } from "next-auth/react"
import SignIn from './SignIn'

async function signInPage() {
    const providers= await getProviders()
  return (
    <div className="flex w-full items-center justify-center mt-4 flex-col gap-8">
        <h3 className="text-2xl font-medium">Sign in</h3>
        <SignIn providers={providers}/>
    </div>
  )
}

export default signInPage