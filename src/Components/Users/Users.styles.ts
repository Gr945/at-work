import { Grid, styled } from "@mui/material";

export const UsersGrid = styled(Grid)(({ theme }) => ({
    padding: '40px 140px',
    background: theme.palette.background.default,
    gap: '40px',
    '@media(max-width: 600px)': {
        padding: '40px 16px',
    }
}));

export const UsersList = styled(Grid)(({ theme }) => ({
    gap: '32px',
    '@media(max-width: 480px)': {
        gap: '16px'
    }
}));