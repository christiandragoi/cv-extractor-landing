"use client";

import { useMutation, useQuery } from '@tanstack/react-query'
import { uploadCV, extractCV, checkStatus, createBatchSocket } from '@/lib/api'
import { useEffect, useState } from 'react'

export function useUpload() {
  return useMutation({
    mutationFn: async (files: File[]) => {
      // The API only handles single files at a time per route, so we upload sequentially
      const results = []
      for (const f of files) {
        results.push(await uploadCV(f))
      }
      return results
    },
    onError: (err: any) => {
      if (err.message?.includes('429') || err.message?.includes('Zu viele Anfragen')) {
        alert('Zu viele Anfragen. Bitte warte eine Minute.')
      } else {
        console.error("Upload error:", err)
      }
    }
  })
}

export function useExtraction(jobId: string | undefined) {
  return useQuery({
    queryKey: ['extraction', jobId],
    queryFn: () => checkStatus(jobId!),
    refetchInterval: (query) => {
      const data = query.state.data as any
      return (data?.status === 'completed' || data?.status === 'error') ? false : 2000
    },
    enabled: !!jobId,
    retry: (failureCount, error: any) => {
      if (error?.message?.includes("429") || error?.message?.includes("503")) return false
      return failureCount < 3
    }
  })
}

export function useBatchProgress(jobIds: string[]) {
  const [progress, setProgress] = useState<{
    batch_id: string;
    total_files: number;
    completed: number;
    failed: number;
    progress: number;
    current_file?: string;
    status: string;
  } | null>(null)
  
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!jobIds || jobIds.length === 0) {
      setProgress(null)
      return
    }

    // Generate a temporary batch ID just for this tracking session
    const batchId = crypto.randomUUID()
    const ws = createBatchSocket(batchId)

    ws.onopen = () => {
      ws.send(JSON.stringify({ job_ids: jobIds }))
    }

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        setProgress(data)
        if (data.status === 'completed' || data.status === 'error') {
          ws.close()
        }
      } catch (err) {
        console.error("WebSocket format error:", err)
      }
    }

    ws.onerror = (evt) => {
      console.error("WebSocket error", evt)
      setError(new Error("WebSocket connection failed"))
    }

    return () => {
      ws.close()
    }
  }, [JSON.stringify(jobIds)]) // Safe dependency array because jobIds is an array

  return { progress, error }
}
