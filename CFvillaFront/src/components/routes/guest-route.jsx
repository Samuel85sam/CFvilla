import React from 'react'
import { useAuthStore } from '../../store-zustand/authStore'
import { Navigate } from 'react-router-dom'



const GuestRoute = (props) => {
    const isAuthenticated =  useAuthStore(state => state.isAuthenticated)

    if (isAuthenticated) { return <Navigate to='/posts'/>}
    
    return   props.children
}

export default GuestRoute