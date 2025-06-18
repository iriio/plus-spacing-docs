import type React from "react";
import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";

interface CalloutProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "success" | "error";
  title?: string;
  className?: string;
}

const calloutStyles = {
  info: "border-blue-200 bg-blue-50 text-blue-900",
  warning: "border-yellow-200 bg-yellow-50 text-yellow-900",
  success: "border-green-200 bg-green-50 text-green-900",
  error: "border-red-200 bg-red-50 text-red-900",
};

const calloutIcons = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: XCircle,
};

export function Callout({
  children,
  type = "info",
  title,
  className,
}: CalloutProps) {
  const Icon = calloutIcons[type];

  return (
    <div
      className={cn(
        "border rounded-lg p-4 my-6",
        calloutStyles[type],
        className
      )}
    >
      <div className="flex gap-3">
        <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          {title && <div className="font-semibold mb-1">{title}</div>}
          <div className="text-md leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
