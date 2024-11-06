'use client'

import { ThemeProvider } from "@/context/theme-context"

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
} 