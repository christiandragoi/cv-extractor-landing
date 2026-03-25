"use client"

import { useDropzone } from "react-dropzone"
import { useCallback, useState } from "react"
import { FileIcon, Loader2, X, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"

interface QueuedFile {
  id: string
  file: File
  status: "queued" | "processing" | "completed" | "error"
  progress: number
  confidence?: number
  extractedData?: any
}

interface FileQueueProps {
  onFilesSelected?: (files: File[]) => void
}

export function FileQueue({ onFilesSelected }: FileQueueProps = {}) {
  const [files, setFiles] = useState<QueuedFile[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.slice(0, 5).map(file => ({
      id: Math.random().toString(36).slice(2),
      file,
      status: "queued" as const,
      progress: 0
    }))
    setFiles(prev => [...prev, ...newFiles])
    if (onFilesSelected) {
      onFilesSelected(acceptedFiles.slice(0, 5))
    }
  }, [onFilesSelected])

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    maxFiles: 5,
    maxSize: 10485760 // 10MB
  })

  // Progress is now managed by the parent via React Query hooks.
  // The files array here just keeps track of what was dropped.

  return (
    <div className="space-y-4">
      <div 
        {...getRootProps()} 
        className={cn(
          "border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all",
          isDragActive ? "border-blue-500 bg-blue-50 dark:bg-blue-950" : "border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/50",
          files.length >= 5 && "opacity-50 pointer-events-none"
        )}
      >
        <input {...getInputProps()} />
        <div className="flex justify-center gap-2 mb-2">
          <FileIcon className="h-8 w-8 text-slate-500" />
          <span className="text-2xl">📄</span>
          <span className="text-2xl">🖼️</span>
        </div>
        <p className="text-lg font-medium text-white">
          {isDragActive ? "Dateien fallen lassen..." : "CVs hierher ziehen (max. 5)"}
        </p>
        <p className="text-sm text-slate-500 mt-1">
          PDF, Word, oder Bilder (max. 10MB)
        </p>
      </div>

      {fileRejections.length > 0 && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-center gap-2 text-red-400">
          <AlertCircle className="h-4 w-4" />
          <span className="text-sm">Nur PDF, DOCX und Bilder erlaubt</span>
        </div>
      )}

      <div className="space-y-2">
        {files.map((file) => (
          <div key={file.id} className="bg-slate-900/50 rounded-lg p-4 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <FileIcon className="h-5 w-5 text-blue-400" />
                <span className="font-medium truncate max-w-[200px] text-white">{file.file.name}</span>
                <span className="text-xs text-slate-500">
                  {(file.file.size / 1024 / 1024).toFixed(1)} MB
                </span>
              </div>
              <div className="flex items-center gap-2">
                {file.status === "processing" && <Loader2 className="h-4 w-4 animate-spin text-blue-400" />}
                {file.status === "completed" && (
                  <span className={cn(
                    "text-xs px-2 py-1 rounded-full",
                    (file.confidence || 0) > 0.8 ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  )}>
                    {(file.confidence || 0) > 0.8 ? "✓ Sicher" : "⚠ Prüfen"}
                  </span>
                )}
                <button 
                  onClick={() => setFiles(f => f.filter(x => x.id !== file.id))}
                  className="text-slate-500 hover:text-red-400"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            {file.status === "processing" && (
              <Progress value={file.progress} className="h-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
