import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { User } from './types'

export interface CounterState {
    users: User[]
    archiv: User[]
}

const initialState: CounterState = {
    users: [],
    archiv: []
}

export const counterSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload.sort((a, b) => a.id - b.id)
        },
        addUser: (state, action: PayloadAction<User>) => {
            state.users = [...state.users, action.payload].sort((a, b) => a.id - b.id)
        },
        changeUser: (state, action: PayloadAction<User>) => {
            state.users = state.users.map((el) => {
                if (el.id === action.payload.id) {
                    return action.payload
                } else {
                    return el
                }
            })
        },
        addArchiv: (state, action: PayloadAction<User>) => {
            state.archiv = [...state.archiv, action.payload].sort((a, b) => a.id - b.id);
            state.users = state.users.filter((el) => el.id !== action.payload.id)
        },
        userDelete: (state, action: PayloadAction<Number>) => {
            state.users = state.users.filter((el) => el.id !== action.payload)
        },
        userActive: (state, action: PayloadAction<User>) => {
            state.users = [...state.users, action.payload].sort((a, b) => a.id - b.id);
            state.archiv = state.archiv.filter((el) => el.id !== action.payload.id)
        }
    }
})
export const { addUsers, addUser, addArchiv, userDelete, userActive, changeUser } = counterSlice.actions

export const selectCount = (state: RootState) => state.usersReducer

export default counterSlice.reducer