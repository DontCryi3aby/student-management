import { Box, Button, Paper, Typography } from '@mui/material';
import * as React from 'react';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
            }}
        >
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography component="h1" variant="h5">
                    Student Management
                </Typography>

                <Box mt={2}>
                    <Button fullWidth variant="contained" color="primary">
                        Fake login
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}
