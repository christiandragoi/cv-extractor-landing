"use client";

import { I18nProvider } from "@/i18n/context";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, type ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchInterval: false,
        retry: (failureCount, error: any) => {
          if (error?.status === 429 || error?.status === 503) return false
          return failureCount < 3
        }
      }
    }
  }))

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>{children}</I18nProvider>
    </QueryClientProvider>
  );
}
