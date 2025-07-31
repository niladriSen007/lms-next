
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Dispatch, SetStateAction, useCallback } from "react"


const InpuOtp = ({ otp, setOtp }: {
  otp: string,
  setOtp: Dispatch<SetStateAction<string>>
}) => {



  const handleOtpChange = useCallback((val: string) => {
    setOtp(val)
  }, [setOtp])

  console.log(otp)

  return (
    <InputOTP onChange={(value) => handleOtpChange(value)} value={otp} maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
export default InpuOtp