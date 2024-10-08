import { Box, Grid, styled } from "@mui/material";

export const CardUser = styled(Grid)(() => ({
    padding: '24px',
    borderRadius: '16px',
    background: 'white',
    gap: '20px',
    minWidth: '360px',
    flex: 1,
    justifyContent: 'space-between',
    display: 'flex',
}));

export const MenuBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: '8px 12px',
    gap: '8px',
    borderRadius: '8px',
    border: `1px solid black`,
    position: 'absolute',
    top: 0,
    right: 0,
}));