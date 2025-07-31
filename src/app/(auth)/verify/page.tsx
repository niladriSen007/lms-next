"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import InpuOtp from "./_components/input-otp"
import { Button } from "@/components/ui/button"
import { startTransition, useState, useTransition } from "react"
import { authClient } from "@/lib/auth-client"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"

const VerifyAccountPage = () => {

  const [otp, setOtp] = useState('')
  const router = useRouter()

  const params = useSearchParams()
  const email = params?.get("email")

  const [otpVerificationPending, startOtpVerifyTransition] = useTransition()

  const verifyOtp = () => {
    startOtpVerifyTransition(async () => {
      await authClient?.signIn?.emailOtp({
        email: email as string,
        otp: otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Account verified")
            router?.push("/")
          },
          onError: () => {
            toast.error("Something went wrong")
          }
        }
      })
    })
  }

  return (
    <Card className="w-full mx-auto text-center">
      <CardHeader >
        <CardTitle className="text-2xl">Verify Account</CardTitle>
        <CardDescription>
          Please check your email for the verification Otp to complete your account setup.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center flex-col gap-5">
        <InpuOtp {...{ otp, setOtp }} />
        <span className="text-sm">Enter your 6 digit verification code to verify your account</span>
        <Button disabled={otpVerificationPending || otp?.length !== 6} onClick={verifyOtp} className="bg-violet-700 w-full cursor-pointer hover:bg-violet-600 transition-all duration-300 text-white">{otpVerificationPending ? "Verifying..." : "Verify Account"}</Button>
      </CardContent>
    </Card>
  )
}
export default VerifyAccountPage