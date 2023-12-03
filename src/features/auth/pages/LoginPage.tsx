import { Box, Button, CircularProgress, Paper, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Navigate } from 'react-router-dom';
import { authActions, selectIsLogging } from '../authSlice';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
    const dispatch = useAppDispatch();
    const isLogging = useAppSelector(selectIsLogging);
    const isLoggedIn = !!localStorage.getItem('user_name');

    const handleLoginClick = () => {
        dispatch(
            authActions.login({
                username: '',
                password: '',
            }),
        );
    };

    if (isLoggedIn) return <Navigate to="/admin" />;

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
                    <Button
                        onClick={handleLoginClick}
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={isLogging}
                    >
                        {isLogging && <CircularProgress sx={{ mr: 1 }} color="inherit" size={20} />}
                        Fake login
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}
