import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Header = () => (
  <CardHeader>
    <CardTitle className="text-2xl">
      Welcome to LMS
    </CardTitle>
    <CardDescription>
      Login with your Gmail or Github
    </CardDescription>
  </CardHeader>
)