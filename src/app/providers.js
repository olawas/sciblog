// app/providers.tsx
"use client";

import {NextUIProvider} from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()
export function Providers({children}) {
  return (
    <NextUIProvider>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </SessionProvider>
    </NextUIProvider>
  )
}