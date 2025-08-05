"use client"

import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {

  const router = useRouter()

  const { data: session } = authClient?.useSession?.()

  async function signOut() {
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

  return (
    <div>
      <ThemeToggle />
      {
        session ?
          <>
            <h1>{session?.user?.name}</h1>
            <Button className="cursor-pointer" onClick={signOut}>Sign out</Button>
          </>
          :
          <h1>Not logged in</h1>
      }
    </div>
  );
}
