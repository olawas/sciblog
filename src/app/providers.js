// app/providers.tsx
"use client";

import {NextUIProvider} from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react';
import { createContext, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {Context, createMainContext} from '@/contexts/MainContext'
const queryClient = new QueryClient()
export function Providers({children}) {

  const [theme, setContextTheme] = useState(typeof window !== "undefined" && (localStorage.getItem('theme') ?? 'light'))
  const context = {
    theme,
    setContextTheme,
  }
  return (
    <NextUIProvider>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <Context.Provider value={context}>
            {children}
          </Context.Provider>
        </QueryClientProvider>
      </SessionProvider>
    </NextUIProvider>
  )
}
export { Context }