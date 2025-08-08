import { Toggle } from "@/components/ui/toggle";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { type Editor } from "@tiptap/react";
import { Bold, Heading1, Heading2, Heading3, Heading4, Italic, ListIcon, ListOrdered, Strikethrough, Underline } from "lucide-react";
import { JSX } from "react";

interface iAppProps {
  editor: Editor | null;
}

export const RICH_TEXT_EDITOR_MENU: {
  icon: JSX.Element,
  title: string,
  command: (editor: Editor) => void,
  isActive: (editor: Editor) => boolean
}[] = [
    {
      icon: <Bold />,
      title: "Bold",
      command: (editor: Editor) => editor.chain().focus().toggleBold().run(),
      isActive: (editor: Editor) => editor.isActive("bold"),
    },
    {
      icon: <Italic />,
      title: "Italic",
      command: (editor: Editor) => editor.chain().focus().toggleItalic().run(),
      isActive: (editor: Editor) => editor.isActive("italic"),
    },
    {
      icon: <Strikethrough />,
      title: "Strike",
      command: (editor: Editor) => editor.chain().focus().toggleStrike().run(),
      isActive: (editor: Editor) => editor.isActive("strike"),
    },
    {
      icon: <Heading1 />,
      title: "Heading 1",
      command: (editor: Editor) => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: (editor: Editor) => editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Heading2 />,
      title: "Heading 2",
      command: (editor: Editor) => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: (editor: Editor) => editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <Heading3 />,
      title: "Heading 3",
      command: (editor: Editor) => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: (editor: Editor) => editor.isActive("heading", { level: 3 }),
    },
    {
      icon: <Heading4 />,
      title: "Heading 4",
      command: (editor: Editor) => editor.chain().focus().toggleHeading({ level: 4 }).run(),
      isActive: (editor: Editor) => editor.isActive("heading", { level: 4 }),
    },
    {
      icon: <Underline />,
      title: "Underline",
      command: (editor: Editor) => editor.chain().focus().toggleUnderline().run(),
      isActive: (editor: Editor) => editor.isActive("underline"),
    },
    {
      icon: <ListIcon />,
      title: "Bullet List",
      command: (editor: Editor) => editor.chain().focus().toggleBulletList().run(),
      isActive: (editor: Editor) => editor.isActive("bulletList"),
    },
    {
      icon: <ListOrdered />,
      title: "Ordered List",
      command: (editor: Editor) => editor.chain().focus().toggleOrderedList().run(),
      isActive: (editor: Editor) => editor.isActive("orderedList"),
    },
  ]
const MenuBar = ({ editor }: iAppProps) => {
  if (!editor) return null
  return (
    <div className="border border-input rounded-t-lg p-2 bg-card flex flex-wrap gap-1 items-center">
      <TooltipProvider>
        <div>
          {
            RICH_TEXT_EDITOR_MENU.map((item) => (
              <Tooltip key={item.title}>
                <TooltipTrigger asChild>
                  <Toggle size="sm"
                    pressed={item.isActive(editor)}
                    onPressedChange={() => item.command(editor)}
                    className={cn(
                      item.isActive(editor) && "bg-gray-700 text-white",
                      "cursor-pointer"
                    )}
                  >
                    {item.icon}
                  </Toggle>
                </TooltipTrigger>
                <TooltipContent className="bg-violet-600">{item.title}</TooltipContent>
              </Tooltip>
            ))
          }

        </div>
        <div className="w-px h-6 bg-border mx-2"></div>
        <div className="flex flex-wrap gap-1" >
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                pressed={editor.isActive({
                  textAlign: "left",
                })}
                onPressedChange={() => editor.command(editor)}
                className={cn(
                  item.isActive(editor) && "bg-gray-700 text-white",
                  "cursor-pointer"
                )}
              >

              </Toggle>
            </TooltipTrigger>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  )
}
export default MenuBar