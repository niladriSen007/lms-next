import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkle } from "lucide-react"
import Link from "next/link"


const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-8 py-24 ">
      <Badge variant="outline" className="md:text-lg border hover:border-accent transition-all duration-300 flex items-center gap-2">
        <Sparkle />
        The Future of Online Education
      </Badge>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Elevate your <span className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">Online Learning</span> presence</h1>
      <p className="max-w-4xl text-muted-foreground md:text-lg">Discover a new way of learning with our platform, where you can take control of your learning experience and unlock your full potential.</p>
      <div className="flex items-center gap-4">
        <Link
          href="/admin/courses"
          className={buttonVariants({
            size: "lg",
            variant: "default"
          })}>Explore Courses</Link>
        <Link
          href="/login"
          className={buttonVariants({
            size: "lg",
            variant: "outline"
          })}>Sign in</Link>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-16">
        <Card className="bg-transparent  w-96 h-40 flex flex-col ">
          <CardHeader className="flex items-center gap-6">
            <span className="text-4xl">
            🏫
            </span>
            <section>
              <CardTitle className="flex flex-col items-start gap-1.5">
                <span className=" font-bold">Alejandro Postiga</span>
                <span className="text-sm text-muted-foreground">Comprehensive Courses</span>
              </CardTitle>
            </section>
          </CardHeader>
          <CardDescription className="text-left px-6">
           Access a wide range of courses designed to help you excel in your chosen field.
          </CardDescription>
        </Card>
        <Card className="bg-transparent  w-96 h-40 flex flex-col ">
          <CardHeader className="flex items-center gap-2">
              <span className="text-4xl">
            🎮
            </span>
            <section>
              <CardTitle className="flex flex-col items-start">
                <span className=" font-bold">Hose Molina</span>
                <span className="text-sm text-muted-foreground">Interactive Learning</span>
              </CardTitle>
            </section>
          </CardHeader>
          <CardDescription className="text-left px-6">
           Engage with interactive lessons, quizzes, and discussions to enhance your learning experience.
          </CardDescription>
        </Card>
        <Card className="bg-transparent h-40 w-96 flex flex-col ">
          <CardHeader className="flex items-center gap-2">
              <span className="text-4xl">
            👩‍💻
            </span>
            <section>
              <CardTitle className="flex flex-col items-start">
                <span className=" font-bold">Viral Kohli</span>
                <span className="text-sm text-muted-foreground">Progress tracking</span>
              </CardTitle>
            </section>
          </CardHeader>
          <CardDescription className="text-left px-6">
            Our platform allows you to learn at your own pace, with courses designed to fit your schedule and learning style.
          </CardDescription>
        </Card>
      
      </section>
    </div>
  )
}
export default HomePage