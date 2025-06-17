import type React from "react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  children: React.ReactNode
  title?: string
  language?: string
  className?: string
}

export function CodeBlock({ children, title, language, className }: CodeBlockProps) {
  return (
    <div className={cn("my-6", className)}>
      {title && (
        <div className="bg-slate-100 border border-b-0 rounded-t-lg px-4 py-2 text-sm font-medium text-slate-700">
          {title}
        </div>
      )}
      <pre
        className={cn(
          "bg-slate-900 text-slate-100 p-4 overflow-x-auto text-sm leading-relaxed",
          title ? "rounded-b-lg" : "rounded-lg",
        )}
      >
        <code>{children}</code>
      </pre>
    </div>
  )
}
