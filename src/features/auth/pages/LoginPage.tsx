import { Box, Button, Paper, Typography } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { authActions } from '../authSlice';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
    const dispatch = useAppDispatch();
    const handleLoginClick = () => {
        dispatch(
            authActions.login({
                username: '',
                password: '',
            }),
        );
    };

    const handleLogoutClick = () => {
        dispatch(authActions.logout());
    };

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
                    >
                        Fake login
                    </Button>
                </Box>

                <Button
                    sx={{ mt: 2 }}
                    onClick={handleLogoutClick}
                    variant="contained"
                    fullWidth
                    color="primary"
                >
                    Logout
                </Button>
            </Paper>
        </Box>
    );
}
