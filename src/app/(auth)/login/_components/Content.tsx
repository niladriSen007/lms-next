"use client"

import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { authClient } from "@/lib/auth-client"
import { GithubIcon, Loader2 } from "lucide-react"
import { toast } from "sonner"

import { useTransition } from "react"
import { Form } from "./Form"


export const Content = () => {


  const [githubLoginPending, startGithubLoginTransaition] = useTransition()

  async function signInWithGithub() {
    startGithubLoginTransaition(async () => {
      await authClient?.signIn?.social({
        provider: "github",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed in with Github")
          },
          onError: () => {
            toast.error("Something went wrong")
          }
        }
      })
    })
  }

  return (
    <CardContent className="flex flex-col gap-4">
      <Button disabled={githubLoginPending} className="w-full cursor-pointer" onClick={signInWithGithub} variant={"outline"}>
        {
          githubLoginPending
            ? <> <Loader2 className="size-4 animate-spin" /> <span>Signing in...</span> </>
            : (
              <>
                <GithubIcon className="mr-2" />
                Signin with Github
              </>
            )
        }
      </Button>
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-card px-2 text-muted-foreground">Or continue with</span>
      </div>
      <Form />
    </CardContent>
  )
}