import { Box, Paper, Typography } from '@mui/material';
import * as React from 'react';

export interface WidgetProps {
    title: string;
    children: React.ReactNode;
}

export default function Widget({ title, children }: WidgetProps) {
    return (
        <Paper sx={{ p: 2, border: '1px solid #ccc' }}>
            <Typography sx={{ textAlign: 'center', display: 'block' }} variant="button">
                {title}
            </Typography>
            <Box>{children}</Box>
        </Paper>
    );
}
