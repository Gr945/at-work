import { Box, Grid, styled, Input as muiInput, Button } from "@mui/material";

export const ProfilePage = styled(Grid)(({ theme }) => ({
    padding: '16px 140px',
    backgroundColor: theme.palette.background.default,
}));

export const MainGrid = styled(Grid)(() => ({
    flexWrap: 'nowrap',
    '@media(max-width: 480px)': {
        flexWrap: 'wrap'
    }
}))

export const ButtonSubmit = styled(Button)(({ theme }) => ({
    marginTop: '32px',
    padding: '12px 42px',
    borderRadius: '50px',
    background: theme.custom.c5,
    cursor: 'pointer',
    '&:hover': {
        background: theme.custom.c4,
    },
    '@media(max-width: 600px)': {
        width: '100%'
    }

}))

export const ContainerGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '16px'
}));

export const BackBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0',
    gap: '42px',
    cursor: 'pointer',
    width: 'max-content'
}));

export const Input = styled(muiInput)(({ theme }) => ({
    borderRadius: '50px',
    border: `2px solid ${theme.custom.c6}`,
    padding: '0 16px 0 8px',
    fontSize: '1rem',
    marginTop: '8px',
    '&:focus': {
        outline: 'none',
    },
    '& input': {
        padding: '0',
    },
    '&:hover': {
        background: theme.custom.c6
    }
}));