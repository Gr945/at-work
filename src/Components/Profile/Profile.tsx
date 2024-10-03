import { useAppSelector } from '../../hooks';
import { BackBox, ContainerGrid, Input, MainGrid, ProfilePage, ButtonSubmit } from './Profile.styles';
import { useHistory, useParams } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, Dialog, FormControl, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { User } from '../../types';
import { store } from '../../store';
import { changeUser } from '../../reducer';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function Profile() {
    const params = useParams<{ id: string }>()
    const userStore = useAppSelector(state => state.usersReducer.users.find((el) => el.id === +params.id))
    const history = useHistory();

    const [user, setUser] = useState({} as User)
    const [openModal, setOpenModal] = useState(false)
    useEffect(() => {
        if (userStore) {
            setUser(userStore)
        }
    }, [userStore])

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setOpenModal(true)
        store.dispatch(changeUser(user))
        setTimeout(() => {
            setOpenModal(false)
        }, 4000)
    }

    return (
        <ProfilePage>

            <BackBox onClick={() => history.push('/')} >
                <KeyboardBackspaceIcon sx={{ color: theme => theme.custom.c4 }} />
                <Typography children='Назад' variant='body2' sx={{ color: theme => theme.custom.c4 }} />
            </BackBox>

            <MainGrid container gap={5} >
                <ContainerGrid p={5} >
                    <Box component="img" src="/images/rayu.png" alt='img' />
                    <Grid container gap={3} flexDirection='column' mt={5}>
                        <Typography children='Данные профиля' variant='h6' sx={{ color: theme => theme.custom.c5, borderBottom: theme => `1px solid ${theme.custom.c6}` }} pb={1} />
                        <Typography children='Рабочее пространство' variant='subtitle3' sx={{ color: theme => theme.custom.c2, borderBottom: theme => `1px solid ${theme.custom.c6}` }} pb={1} />
                        <Typography children='Приватность' variant='subtitle3' sx={{ color: theme => theme.custom.c2, borderBottom: theme => `1px solid ${theme.custom.c6}` }} pb={1} />
                        <Typography children='Безопасность' variant='subtitle3' sx={{ color: theme => theme.custom.c2, borderBottom: theme => `1px solid ${theme.custom.c6}` }} pb={1} />
                    </Grid>
                </ContainerGrid>

                <ContainerGrid p={5} gap={3} width={'100%'} minWidth={'360px'}>
                    <Typography children='Данные профиля' variant='h6' sx={{ color: theme => theme.custom.c5, borderBottom: theme => `1px solid ${theme.custom.c6}` }} pb={1} />
                    <form onSubmit={handleSubmit}>
                        <Grid container mt={2} gap={4} maxWidth={'420px'}>
                            <FormControl >
                                <Typography children='Имя' variant='h5' />
                                <Input
                                    name="name"
                                    type="text"
                                    required
                                    onChange={(e) => setUser((pre) => { return { ...pre, name: e.target.value } })}
                                    value={user.name}
                                />
                            </FormControl>

                            <FormControl >
                                <Typography children='Никнейм' variant='h5' />
                                <Input
                                    name="nickName"
                                    type="text"
                                    required
                                    onChange={(e) => setUser((pre) => { return { ...pre, username: e.target.value } })}
                                    value={user.username}
                                />
                            </FormControl>

                            <FormControl >
                                <Typography children='Почта' variant='h5' />
                                <Input
                                    name="email"
                                    type='email'
                                    required
                                    onChange={(e) => setUser((pre) => { return { ...pre, email: e.target.value } })}
                                    value={user.email}
                                />
                            </FormControl>

                            <FormControl >
                                <Typography children='Город' variant='h5' />
                                <Input
                                    name="city"
                                    type="text"
                                    required
                                    onChange={(e) => setUser((pre) => { return { ...pre, address: { ...pre.address, city: e.target.value } } })}
                                    value={user.address?.city}
                                />
                            </FormControl>

                            <FormControl >
                                <Typography children='Телефон' variant='h5' />
                                <Input
                                    name="phone"
                                    type="text"
                                    required
                                    onChange={(e) => setUser((pre) => { return { ...pre, phone: e.target.value } })}
                                    value={user.phone}

                                />
                            </FormControl>

                            <FormControl >
                                <Typography children='Название компании' variant='h5' />
                                <Input
                                    name="companyName"
                                    type="text"
                                    required
                                    onChange={(e) => setUser((pre) => { return { ...pre, company: { ...pre.company, name: e.target.value } } })}
                                    value={user.company?.name}
                                />
                            </FormControl>

                        </Grid>
                        <ButtonSubmit type='submit' >
                            <Typography children='Сохранить' variant='h6' sx={{ color: theme => theme.palette.background.paper}} />
                        </ButtonSubmit>
                    </form>

                </ContainerGrid>
            </MainGrid>
            <Dialog open={openModal} onClose={setOpenModal}>
                <Grid gap='20px' container flexDirection='column' position='relative' alignItems='center' justifyContent='center' sx={{ padding: '40px', borderRadius: '16px' }}>
                    <CloseIcon onClick={() => setOpenModal(false)} sx={{ position: 'absolute', right: '10px', top: '10px', color: theme => theme.custom.c4 }} />
                    <CheckBoxIcon sx={{ width: '60px', height: '60px', color: theme => theme.custom.c7 }} />
                    <Typography children='Изменения сохранены!' variant='body2' sx={{ color: theme => theme.custom.c4 }} />
                </Grid>
            </Dialog>
        </ProfilePage>
    );
}

export default Profile;