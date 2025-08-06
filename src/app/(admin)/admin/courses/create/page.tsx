import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const CreateCoursePage = () => {
  return (
    <>
      <Link href={"/admin/courses"} className={buttonVariants({
        size: "icon"
      })}>
        <ArrowLeft />
      </Link>

      <div>
        <h1 className="text-2xl font-bold">Create a New Course</h1>
        <p className="text-muted-foreground">Fill out the form below to create a new course.</p>
        {/* Form for creating a course will go here */}
      </div>
    </>
  )
}
export default CreateCoursePage