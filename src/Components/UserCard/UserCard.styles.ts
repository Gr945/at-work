import { Box, Grid, styled } from "@mui/material";

export const CardUser = styled(Grid)(({ theme }) => ({
    padding: '24px',
    borderRadius: '16px',
    background: theme.palette.background.paper,
    gap: '20px',
    minWidth: '360px',
    flex: 1,
    justifyContent: 'space-between',
    display: 'flex',
    '@media(max-width: 600px)': {
        minWidth: 'auto',
        flex: 'none'
    },
    '@media(max-width: 480px)': {
        flexDirection: 'column',
        width: '162px',
        padding: '16px',
    }
}));

export const MenuBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
    padding: '8px 12px',
    gap: '8px',
    borderRadius: '8px',
    border: `1px solid ${theme.custom.c3}`,
    position: 'absolute',
    top: 0,
    right: 0,
}));