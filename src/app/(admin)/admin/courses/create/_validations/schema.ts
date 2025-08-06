import { description } from './../../../../../../components/sidebar/chart-area-interactive';
import { z } from "zod"

export const courseLevels = ["BEGINNER", "INTERMEDIATE", "ADVANCED"]
export const CourseStatus = ["DRAFT", "PUBLISHED", "ARCHIVED"]

export const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters long",
  }).max(50, {
    message: "Title must not exceed 50 characters",
  }),
  description: z.string().min(3, {
    message: "Description must be at least 3 characters long",
  }).max(500, {
    message: "Description must not exceed 500 characters",
  }),
  fileKey: z.string().min(1, {
    message: "File key is required",
  }).refine((value) => value !== "undefined", {
    message: "File key cannot be 'undefined'",
  }),
  price: z.coerce.number().min(50, {
    message: "Price must be at least 50$",
  }),
  duration: z.coerce.number().min(1, {
    message: "Duration must be at least 1 hour",
  }),
  level: z.enum(courseLevels, {
    message: "Level must be one of the following: BEGINNER, INTERMEDIATE, ADVANCED",
  }),
  category: z.string().min(1, {
    message: "Category is required",
  }),
  smallDescription: z.string().min(3, {
    message: "Small description must be at least 3 characters long",
  }).max(100, {
    message: "Small description must not exceed 100 characters",
  }),
  slug: z.string().min(2, {
    message: "Slug must be at least 2 characters long",
  }).max(50, {
    message: "Slug must not exceed 50 characters",
  }),
  status: z.enum(CourseStatus, {
    message: "Status must be one of the following: DRAFT, PUBLISHED, ARCHIVED",
  }),
})