import React, { useEffect, useState, useContext } from 'react'
import firebase from '../api/firebase'
type ContextProps = {
  user: firebase.User | null
  authenticated: boolean
  setUser: any
  loadingAuthState: boolean
}

export const AuthContext = React.createContext<Partial<ContextProps>>({})

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null as firebase.User | null)
  const [loadingAuthState, setLoadingAuthState] = useState(true)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      setUser(user)
      setLoadingAuthState(false)
      console.log('Auth Changed ! ', user)
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: user !== null,
        setUser,
        loadingAuthState
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}
