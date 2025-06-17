import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface TokenExampleProps {
  token: string
  value: string
  type: "semantic" | "cross-semantic"
  description: string
  className?: string
}

export function TokenExample({ token, value, type, description, className }: TokenExampleProps) {
  return (
    <div className={cn("flex items-center justify-between py-3 px-4 border rounded-lg", className)}>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <code className="text-sm font-mono bg-slate-100 px-2 py-1 rounded">{token}</code>
          <Badge variant={type === "semantic" ? "default" : "secondary"} className="text-xs">
            {type === "semantic" ? "✓ Semantic" : "⚠️ Cross-semantic"}
          </Badge>
        </div>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
      <div className="text-sm font-medium text-slate-500">{value}</div>
    </div>
  )
}
