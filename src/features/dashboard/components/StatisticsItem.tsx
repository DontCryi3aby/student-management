import * as React from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';

export interface StatisticsItemProps {
    icon: React.ReactElement;
    label: string;
    value: string | number;
}

export default function StatisticsItem({ icon, label, value }: StatisticsItemProps) {
    return (
        <Paper sx={{ p: 2, mt: 2, border: '1px solid #ccc' }}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Box>{icon}</Box>

                <Box textAlign={'right'}>
                    <Typography variant="h5">{value}</Typography>
                    <Typography variant="caption">{label}</Typography>
                </Box>
            </Stack>
        </Paper>
    );
}
