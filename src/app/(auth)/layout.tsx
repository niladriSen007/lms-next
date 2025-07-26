import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"

const AuthLayout = ({ children }: { children: ReactNode }) => {

  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <Link href={"/"} className={buttonVariants({
        variant: "outline",
        className: "absolute left-4 top-4"
      })}><ArrowLeft /> Back</Link>
      <div className="flex w-full max-w-sm flex-col gap-6 text-center">
        {children}
      </div>
    </div>
  )
}
export default AuthLayout