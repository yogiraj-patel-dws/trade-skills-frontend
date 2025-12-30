import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../react-query/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};
