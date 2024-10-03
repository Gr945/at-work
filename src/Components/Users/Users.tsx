import { useEffect, useState } from 'react';
import { UsersGrid, UsersList } from './Users.styles';
import { User } from '../../types';
import { store } from '../../store';
import { addUsers } from '../../reducer';
import { CircularProgress, Collapse, Grid, Typography } from '@mui/material';
import { useAppSelector } from '../../hooks'
import UserCard from '../UserCard/UserCard';

function Users() {
    const [loading, setLoading] = useState(true)
    const allUsers = useAppSelector(state => state.usersReducer.users)
    const archivUsers = useAppSelector(state => state.usersReducer.archiv)
    useEffect(() => {
        if (allUsers.length === 0) {
            getData();
        } else {
            setTimeout(() => {
                setLoading(false);
            }, 500)
        }
    }, [allUsers])

    async function getData() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => {
                if (users.length > 0) {
                    store.dispatch(addUsers(users as User[]));
                    setLoading(false);
                }
            });
    }

    return (
        <UsersGrid>
            {loading ? (
                <Grid container alignItems='center' justifyContent='center'>
                    <CircularProgress color="secondary" sx={{ width: '100%', display: 'flex', alignItems: 'center' }} />
                </Grid>
            ) : (

                <Collapse in={allUsers.length > 0}>
                    <Grid container gap='40px'>
                        <Grid container sx={{ borderBottom: theme => `1px solid ${theme.palette.primary.light}`, height: '49px' }}>
                            <Typography children='Активные' variant='subtitle4' />
                        </Grid>
                        <UsersList container>
                            {allUsers.slice(0, 6).map((el) => <UserCard key={el.id} user={el} />)}
                        </UsersList>


                        <Grid container sx={{ borderBottom: theme => `1px solid ${theme.palette.primary.light}`, height: '49px' }}>
                            <Typography children='Архив' variant='subtitle4' />
                        </Grid>
                        <UsersList container>
                            {archivUsers.length > 0 ? archivUsers.map((el) => <UserCard key={el.id} user={el} active={false} />) : <Typography children='Архив пуст' />}
                        </UsersList>
                    </Grid>
                </Collapse>

            )}

        </UsersGrid>
    );
}

export default Users;
