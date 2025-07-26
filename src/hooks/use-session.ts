import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function useSession() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  return {session}
}