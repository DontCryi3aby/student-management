import { ReactNode } from 'react';
import { Header, Sidebar } from './components';
import { Box, Stack } from '@mui/material';

export interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <Stack minHeight="100vh">
            <Box>
                <Header />
            </Box>
            <Stack direction="row" flex={1}>
                <Box width={240}>
                    <Sidebar />
                </Box>
                <Box flex={1} p="8px 24px" position="relative">
                    {children}
                </Box>
            </Stack>
        </Stack>
    );
}
