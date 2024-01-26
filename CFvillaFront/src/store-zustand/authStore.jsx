import { create } from "zustand"
import { createJSONStorage, persist } from 'zustand/middleware'

const initialUserState = {
    currentUser: null,
    jwt: null,
    isAuthenticated: false,
};

export const useAuthStore = create(
    persist(
        (set, get) => ({
            ...initialUserState,
            addUserData: (newUserData) => set((state) => (
                {
                    currentUser: newUserData.currentUser,
                    jwt: newUserData.jwt,
                    isAuthenticated: true
                }
            ))
        })
        ,
        {
            name: "authStorage",
           

            // partialize: (state) =>
            // Object.fromEntries(
            //   Object.entries(state).filter(([key]) => !['foo'].includes(key)),
            // ),
    
        }
    )


)


