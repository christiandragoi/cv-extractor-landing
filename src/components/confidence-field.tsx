"use client"

// components/confidence-field.tsx
import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ConfidenceFieldProps {
  label: string
  value: string
  confidence: number // 0-1
  onChange: (value: string) => void
  onValidate: () => void // Enter key
  fieldName: string
}

export function ConfidenceField({ 
  label, 
  value, 
  confidence, 
  onChange, 
  onValidate,
  fieldName 
}: ConfidenceFieldProps) {
  const getBorderColor = () => {
    if (confidence >= 0.9) return "border-green-500 focus-visible:ring-green-500"
    if (confidence >= 0.6) return "border-amber-500 focus-visible:ring-amber-500"
    return "border-red-500 focus-visible:ring-red-500"
  }

  const getIcon = () => {
    if (confidence >= 0.9) return <CheckCircle2 className="h-4 w-4 text-green-500" />
    return <AlertCircle className={cn(
      "h-4 w-4",
      confidence >= 0.6 ? "text-amber-500" : "text-red-500"
    )} />
  }

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <Label htmlFor={fieldName} className="text-sm font-medium">
          {label}
        </Label>
        <div className="flex items-center gap-1 text-xs">
          {getIcon()}
          <span className={cn(
            confidence >= 0.9 ? "text-green-600" : 
            confidence >= 0.6 ? "text-amber-600" : "text-red-600"
          )}>
            {Math.round(confidence * 100)}% Sicherheit
          </span>
        </div>
      </div>
      <div className="relative">
        <Input
          id={fieldName}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onValidate()}
          className={cn(
            "pr-10 transition-colors",
            getBorderColor()
          )}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {getIcon()}
        </div>
      </div>
      {confidence < 0.6 && (
        <p className="text-xs text-red-600 flex items-center gap-1">
          <AlertCircle className="h-3 w-3" />
          Bitte manuell prüfen – Ungewissheit erkannt
        </p>
      )}
    </div>
  )
}
