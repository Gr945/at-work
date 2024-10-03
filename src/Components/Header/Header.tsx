import { HeaderGrid } from './Header.styles';
import { Box, Grid, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Header() {
    return (
        <HeaderGrid>
            <Grid container justifyContent='space-between'>
                <Box sx={{ display: 'flex', gap: '2px' }}>
                    <Box
                        component="img"
                        src={'/images/logo-sign.svg'}
                        alt='logo-sing.svg'
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography children='at-' variant='subtitle1' />
                        <Typography children='work' variant='subtitle2' />
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <FavoriteBorderIcon />
                    <NotificationsNoneIcon />
                    <Box sx={{ display: 'flex', gap: '8px' }}>
                        <Box
                            component="img"
                            src={'/images/rayu.png'}
                            alt='logo-sing.svg'
                            sx={{ width: '20px', height: '20px', borderRadius: '50px' }}
                        />
                        <Typography children='name' variant='subtitle3' />
                    </Box>
                </Box>
            </Grid>
        </HeaderGrid>
    );
}

export default Header;