"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import slugify from "slugify"
import { courseCreationFormSchema, courseLevels, CourseSchemaType, CourseStatus } from "../_validations/schema"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { SelectTrigger } from "@radix-ui/react-select"
import { Sparkle } from "lucide-react"
import { COURSE_CATEGORIES } from "../_utils/constant"
import RickTextEditor from "./rich-text-editor"




const CourseForm = () => {

  const initialValues: CourseSchemaType = {
    title: "",
    description: "",
    fileKey: "",
    price: 0,
    duration: 0,
    level: "BEGINNER",
    category: "",
    smallDescription: "",
    slug: "",
    status: "DRAFT",
  }

  const form = useForm<CourseSchemaType>({
    resolver: zodResolver(courseCreationFormSchema),
    defaultValues: initialValues,
  })


  function onSubmit(values: CourseSchemaType) {
    console.log(values)
  }

  const FileKey = () => (
    <FormField<CourseSchemaType>
      control={form.control}
      name="fileKey"
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>Thumbnail Image</FormLabel>
          <FormControl>
            <Input placeholder="Enter thumbnail url" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )


  const Category = () => (
    <FormField<CourseSchemaType>
      control={form.control}
      name="category"
      render={({ field }) => (

        <FormItem >
          <FormLabel>Category</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl className="select-box">
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {COURSE_CATEGORIES.map((category) => (
                <SelectItem className="cursor-pointer " key={category.id} value={category.name}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )
      }
    />
  )
  const Level = () => (
    <FormField<CourseSchemaType>
      control={form.control}
      name="level"
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>Course Level</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl className="select-box">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Level" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {courseLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level?.charAt(0)?.toUpperCase() + level?.slice(1, level.length)?.toLowerCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
  const SmallDescription = () => (
    <FormField<CourseSchemaType>
      control={form.control}
      name="smallDescription"
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>Small Description</FormLabel>
          <FormControl>
            <Textarea className="min-h-32" placeholder="Enter Small Description" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
  const Slug = () => (
    <div className="flex flex-col gap-4 ">
      <FormField<CourseSchemaType>
        control={form.control}
        name="slug"
        render={({ field }) => (
          <FormItem className="w-full rounded-md">
            <FormLabel>Slug</FormLabel>
            <FormControl>
              <Input placeholder="Generate Slug" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="button" onClick={() => {
        const titleVal = form?.getValues("title")
        const slug = slugify(titleVal, { lower: true })
        form.setValue("slug", slug)
      }}
        className="flex items-center gap-2 cursor-pointer bg-gradient-to-r from-pink-500 to-violet-500 text-white radius-md"
      >Genaret Slug
        <Sparkle />
      </Button>
    </div>
  )
  const Title = () => (
    <FormField<CourseSchemaType>
      control={form.control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input placeholder="Enter Course title" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
  const Duration = () => (
    <FormField<CourseSchemaType>
      control={form.control}
      name="duration"
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>Duration (hours)</FormLabel>
          <FormControl>
            <Input type="number" placeholder="Enter Duration" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
  const CoursePrice = () => (
    <FormField<CourseSchemaType>
      control={form.control}
      name="price"
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>Price ($)</FormLabel>
          <FormControl>
            <Input type="number" placeholder="Enter Price" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
  const Status = () => (
    <FormField<CourseSchemaType>
      control={form.control}
      name="status"
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>Status</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl className="select-box text-left px-2">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {CourseStatus?.map((status) => (
                <SelectItem key={status} value={status}>
                  {status?.charAt(0)?.toUpperCase() + status?.slice(1, status.length)?.toLowerCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Title />
          <Slug />
          <SmallDescription />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  {/*     <Textarea className="min-h-32" placeholder="Enter Description" {...field} /> */}
                  <RickTextEditor />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FileKey />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <Category />
            <Level />
            <Duration />
            <CoursePrice />
          </div>
          <Status />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  )
}
export default CourseForm