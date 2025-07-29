/* "use client" */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2Icon } from "lucide-react";
import { ChangeEvent } from "react";

export const Form = ({ email, emailLoginPending, onChangeEmail, signUpWithEmail }: {
  email: string,
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void,
  signUpWithEmail: () => void,
  emailLoginPending: boolean
}) => {

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label>Email</Label>
        <Input value={email} required onChange={onChangeEmail} name="email" type="email" placeholder="Enter your email"></Input>
      </div>
      <Button onClick={signUpWithEmail} className="cursor-pointer">
        {emailLoginPending ? <><Loader2Icon className="animate-spin size-4" /></> : "Sign in with email"}
      </Button>
    </div>
  )
}