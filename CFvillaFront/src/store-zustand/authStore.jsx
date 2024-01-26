import { create } from "zustand"
import { persist } from 'zustand/middleware'
const initialUserState = {
    currentUser: null,
    jwt: null,
    isAuthenticated: false,
};

export const useAuthStore = create(
    //* persist() ----------
    persist(
        //*arg1------
        (set) => ({
            //! arg1-------
            ...initialUserState
            //! arg1-------
            ,
            //! arg2-------
            addUserData: (newUserData) => set((state) => (
                { ...state,
                  userData: newUserData,
                  reset: () => { set(initialUserState) }
                })
            )
            //! arg1-------
        })
        //*arg1------
        ,
        //*arg2------
        { name: "authStorage" })
    //*arg2------

    //* persist() ----------

)


//! bug ==> authStorage :"{"state":{"currentUser":{"currentUser":{"_id":"65b0d84b733cda3d7f4ac044"},"jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY1YjBkODRiNzMzY2RhM2Q3ZjRhYzA0NCJ9LCJpYXQiOjE3MDYxOTg1OTUsImV4cCI6MTcwNjM3MTM5NX0.qHHMhwPXqEIWSL-LG0_7TdZRODKQBablvuPmOezrqnk","isAuthenticated":true},"jwt":null,"isAuthenticated":false,"userData":{"currentUser":{"_id":"65b2573bcf0f923c4ca0fd6a"},"jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY1YjI1NzNiY2YwZjkyM2M0Y2EwZmQ2YSJ9LCJpYXQiOjE3MDYyNzI0OTEsImV4cCI6MTcwNjQ0NTI5MX0.fqup2plG6Oho2lBQamzpwMohJdKY3Bf676OdREb44AA","isAuthenticated":true}},"version":0}"