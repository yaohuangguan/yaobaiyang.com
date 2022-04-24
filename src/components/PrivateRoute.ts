import React from 'react'
import { navigate } from 'gatsby'
import { useAuth } from '@hooks/useAuth'

const PrivateRoute = ({ children, location, ...rest }) => {
  const { isLoggedIn } = useAuth()
  if (!isLoggedIn && location.pathname === '/private') {
    navigate('/')
    return null
  }

  return React.cloneElement(children, rest)
}

export default PrivateRoute
