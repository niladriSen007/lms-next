import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import CourseForm from "./_components/course-form"

const CreateCoursePage = () => {
  return (
    <>
      <Link href={"/admin/courses"} className={buttonVariants({
        size: "icon"
      })}>
        <ArrowLeft />
      </Link>

      <div className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-2xl md:text-4xl font-bold">Create a New Course</h1>
        <p className="text-muted-foreground">Fill out the form below to create a new course.</p>
        {/* Form for creating a course will go here */}
        <CourseForm />
      </div>
    </>
  )
}
export default CreateCoursePage