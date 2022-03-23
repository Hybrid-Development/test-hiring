import React from 'react'
import '../styles/header.css'
import { useUserContext } from '../contexts/user'
import { HiOutlineRefresh } from 'react-icons/hi'
export default function Header(){
  const { user, path } = useUserContext()

  const resetStorage = () => {
    localStorage.removeItem('posts')
  }

  return <div class="header_container">
    <div className="header_wrapper">
      <div>
        <span class="header_logo">
          <h1>galeria <span>{path}</span></h1>
        </span>
        <span className="header_sub">
          <p>{user.name}</p>
        </span>
      </div>
      
      { path == 'users' ? 
      <div class="header_search">
        <HiOutlineRefresh fontSize={28} onClick={() => resetStorage()}/>
      </div>
      : null}
    </div>
  </div>
}