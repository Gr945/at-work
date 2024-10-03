import { Grid, styled } from "@mui/material";

export const HeaderGrid = styled(Grid)(({ theme }) => ({
    padding: '16px 150px',
    background: theme.palette.background.paper,
    '@media(max-width: 600px)': {
        padding: '11px 16px',
    }
}));