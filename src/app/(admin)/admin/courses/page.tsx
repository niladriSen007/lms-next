import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

const Title = () => (
  <>
    <section className="flex items-center justify-between">
      <h1>Your Courses</h1>
      <Link href="/admin/courses/create" className={`${buttonVariants({
        size: "sm"
      })}`}>
        + Create Course
      </Link>
    </section>
  </>
)

const CoursesPage = () => {
  return (
    <>
      <Title />
    </>
  )
}
export default CoursesPage