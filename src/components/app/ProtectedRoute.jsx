import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const { token } = useSelector( state => state.userInfo);

  if (token) {
    return <Outlet />
  }else{
    return <Navigate to= '/login' />
  }
}

export default ProtectedRoute
