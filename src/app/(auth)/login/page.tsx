import { Card } from "@/components/ui/card"

import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { Content, Header } from "./_components"


const Login = async () => {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (session) {
    redirect("/")
  }

  return (
    <div>
      <Card>
        <Header />
        <Content />
      </Card>
    </div>
  )
}
export default Login