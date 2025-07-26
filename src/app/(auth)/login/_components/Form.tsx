import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Form = () => (
  <div className="grid gap-4">
    <div className="grid gap-2">
      <Label>Email</Label>
      <Input type="email" placeholder="Enter your email"></Input>
    </div>
    <Button className="cursor-pointer">
      Continue with email
    </Button>
  </div>
)