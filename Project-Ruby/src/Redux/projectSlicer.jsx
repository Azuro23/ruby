import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    projects: [{
        projectName: '',
        projectDescription: '',
        serviceType: '',
        projectImages: ['','']
    }]
}

export const projectSlicer = createSlice({
    name: 'projects',
    initialState,

    reducers: {
        addUser: (state, action) => { state.knownUsers.push(action.payload) },
        login: (state, action) => { state.currentUserInfo = { ...action.payload, isLoggedIn: true } },
        logout: (state) => {state.currentUserInfo.isLoggedIn === true ? state.currentUserInfo.isLoggedIn = false : state.currentUserInfo.isLoggedIn = true},
    }
})

export const { addUser, login, logout } = projectSlicer.actions

export default projectSlicer.reducer