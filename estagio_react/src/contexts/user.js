import React from 'react'
import { useState, useContext, createContext } from 'react'

export const StateContext = createContext()

// o que prover as informações
const UserContext = ({ children }) => {
  const [user, setUser] = useState({})
  const [path, setPath] = useState('users')

  return <>
    <StateContext.Provider value={{ user, setUser, path, setPath }}>
      {children}
    </StateContext.Provider>
  </>
}

// o que utiliza as informações
const useUserContext = () => useContext(StateContext)

export {
  UserContext,
  useUserContext,
}
