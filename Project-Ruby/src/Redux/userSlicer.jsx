import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUserInfo: {
        isLoggedIn: false,
        userName: '',
        userEmail: '',
    },
    knownUsers: [
        {
          userName: 'Michaelci',
          userEmail: 'igbanugo.michael@yahoo.com',
          userPassword: 'Starter77',  
        },
    ]
}

export const userSlicer = createSlice({
    name: 'user',
    initialState,

    reducers: {
        addUser: (state, action) => { state.knownUsers.push(action.payload) },
        login: (state, action) => { state.currentUserInfo = { ...action.payload, isLoggedIn: true } },
        logout: (state) => { state.currentUserInfo.isLoggedIn === true ? state.currentUserInfo.isLoggedIn = false : state.currentUserInfo.isLoggedIn = true},
    }
})

export const { addUser, login, logout } = userSlicer.actions

export default userSlicer.reducer