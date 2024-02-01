import { create } from "zustand"
import { persist, devtools } from 'zustand/middleware'
import axios from "axios";

const initialUserState = {
    currentUser: 'the dev User',
    jwt: null,
    isAuthenticated: false,
};

export const useAuthStore = create(
    persist(devtools(
        (set, get) => ({
            ...initialUserState,
            addUserData: (newUserData) => set((state) => (
                {
                    currentUser: newUserData.currentUser,
                    jwt: newUserData.jwt,
                    isAuthenticated: true
                }
            )),
            logout: ()=> set((state) =>(
                {...initialUserState}
            ))
        })
    )
        ,
        {
            name: "authStorage",
            onRehydrateStorage: (state) => {
                axios.defaults.headers.common['Authorization'] = `Bearer ${state.jwt}`; // → injection du jwt dans le header des requêtes 
            }
        })


)


