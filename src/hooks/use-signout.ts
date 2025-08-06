"use client"

import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const useSignOut = () =>{

    const router = useRouter()
  const handleSignout =   async function signOut() {
    await authClient?.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Signed out")
          router.push("/login")
        },
        onError: () => {
          toast.error("Something went wrong")
        }
      }
    })
  }


  return {handleSignout}
}