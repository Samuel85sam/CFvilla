import { create } from "zustand"
import { persist} from 'zustand/middleware'
const initialUserState = {
    currentUser: null,
    jwt: null,
    isAuthenticated: false,
};

export const useAuthStore = create(
    persist((set) => ({

        ...initialUserState,
        addUserData: (newUserData) => set((state) => ({
            ...state,
            userData: newUserData,
            reset: () => {
                set(initialUserState)
            },

        })),
    }), {name: "authStorage"}))


    //! bug ==> authStorage :"{"state":{"currentUser":{"currentUser":{"_id":"65b0d84b733cda3d7f4ac044"},"jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY1YjBkODRiNzMzY2RhM2Q3ZjRhYzA0NCJ9LCJpYXQiOjE3MDYxOTg1OTUsImV4cCI6MTcwNjM3MTM5NX0.qHHMhwPXqEIWSL-LG0_7TdZRODKQBablvuPmOezrqnk","isAuthenticated":true},"jwt":null,"isAuthenticated":false},"version":0}"