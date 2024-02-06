import React from 'react'
import { useAuthStore } from '../../store-zustand/authStore'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = (props) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)

  if (!isAuthenticated) { return <Navigate to='/' /> }

  return props.children
}

export default ProtectedRoute