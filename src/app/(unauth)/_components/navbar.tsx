"use client"
import { ThemeToggle } from "@/components/shared/derived"
import { Button } from "@/components/ui/button";
import { useSignOut } from "@/hooks/use-signout";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const Navbar = () => {

  const router = useRouter()

  const { data: session } = authClient?.useSession?.()
  const { handleSignout } = useSignOut()

  return (
    <header className="border-b flex items-center justify-between px-4 lg:px-64 mx-auto h-16 bg-background/95 sticky top-0 z-50 w-full backdrop-blur-[backdrop-filter]:bg-background/60">
      <h1 className="text-2xl font-bold">Storm</h1>
      <ul>
        <li className="inline-block mr-4">
          <Button className="cursor-pointer" variant="link" onClick={() => router.push("/")}>Home</Button>
        </li>
        <li className="inline-block mr-4">
          <Button className="cursor-pointer" variant="link" onClick={() => router.push("/courses")}>Courses</Button>
        </li>
        <li className="inline-block mr-4">
          <Button className="cursor-pointer" variant="link" onClick={() => router.push("/admin")}>Dashboard</Button>
        </li>
      </ul>
      <section className="flex items-center gap-4">
        <ThemeToggle />
        {
          session ?
            <>

              <Button className="cursor-pointer" onClick={handleSignout}>Sign out</Button>
            </>
            :
            <h1>Not logged in</h1>
        }
      </section>
    </header>
  )
}
export default Navbar