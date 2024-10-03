import { Box, Grid, MenuItem, Tooltip, Typography } from '@mui/material';
import { User } from '../../types';
import { CardUser, MenuBox } from './UserCard.styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useRef, useState } from 'react';
import { store } from '../../store';
import { addArchiv, userDelete, userActive } from '../../reducer';
import { useHistory } from 'react-router-dom';

interface UserCardProps {
    user: User;
    active?: boolean;
}

function UserCard({ user, active = true }: UserCardProps) {
    const [menu, setMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const history = useHistory()

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current?.contains(event.target as Node)) {
            setMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleRedaction = () => {
        history.push(`/user/${user.id}`)
    }

    const handleActivation = () => {
        store.dispatch(userActive(user))
    }

    const handleArchiv = () => {
        store.dispatch(addArchiv(user))
    }

    const handleDelete = () => {
        store.dispatch(userDelete(user.id))
    }

    return (
        <CardUser>
            <Box component="img" src="/images/rayul1.png" alt='img' sx={[!active && { filter: 'brightness(65%)' }, { width: 'auto', '@media(max-width: 480px)': { width: '130px' } }]} />
            <Grid container flexDirection='column' justifyContent='space-between'>
                <Grid container sx={{ height: 'max-content' }}>
                    <Grid container justifyContent='space-between' alignItems='center' position='relative'>
                        <Typography children={user.name} variant='body2' sx={[active && { color: theme => theme.custom.c1 }]} />
                        <Tooltip title={'Меню'} placement='top'>
                            <MoreVertIcon sx={{ cursor: 'pointer' }} onClick={() => setMenu((pre) => !pre)} />
                        </Tooltip>
                        {menu &&
                            <MenuBox ref={menuRef}>
                                <MenuItem onClick={() => { active ? handleRedaction() : handleActivation() }} children={active ? 'Редактировать' : 'Активировать'} />
                                {active && <MenuItem children={'Архивировать'} onClick={handleArchiv} />}
                                {active && <MenuItem children={'Скрыть'} onClick={handleDelete} />}
                            </MenuBox>
                        }
                    </Grid>
                    <Typography children={'At-Work'} variant='subtitle3' />
                </Grid>
                <Typography children={user.address.city} variant='body1' sx={{ color: theme => theme.custom.c2 }} />
            </Grid>

        </CardUser>
    );
}

export default UserCard;