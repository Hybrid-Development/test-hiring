import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal'
import AlbumsPreview from '../components/AlbumsPreview';
import UserCard from '../components/UserCard';
import {getUsers} from '../services/user'
import '../styles/usuarios.css'
import { AnimatePresence } from 'framer-motion';
import { useUserContext } from '../contexts/user';
import Posts from '../components/Posts';
import Loader from '../components/Loader'

export default function Usuarios() {
  const [users, setUsers] = useState([])

  const { setUser, user, setPath } = useUserContext()
  
  useEffect(() => {
    getUsers().then(resp => {
      setUsers(resp)
    })
  }, [])


  const [modalOpenAlbums, setModalOpenAlbums] = useState(false)
  const handleModalAlbums = (user) => {
    setModalOpenAlbums(!modalOpenAlbums)
    if(!modalOpenAlbums === true){
      setUser(user)
      setPath('albums')
    }else{
      setUser({})
      setPath('users')
    } 
  }

  const [modalOpenPosts, setModalOpenPosts] = useState(false)
  const handleModalPosts = (user) => {
    setModalOpenPosts(!modalOpenPosts)
    if(!modalOpenPosts === true){
      setUser(user)
      setPath('posts')
    }else{
      setUser({})
      setPath('users')
    } 
  }

  if(!users.length){
    return <div style={{
      height: '93vh', 
      width: '100%', 
      display: 'grid', 
      placeContent: 'center'}}><Loader /></div>
  }

  return (<>
    <main>
      <ul class="users_list">
        {users.map((user, index) => 
          <li key={index}>
            <UserCard action={[handleModalPosts, handleModalAlbums]} user={user}/>
          </li>
        )}
      </ul>
      <AnimatePresence>
        {modalOpenPosts 
          ? 
            <Modal close={() => handleModalPosts(user)}><Posts user={user}/></Modal> 
          : 
            null
        }
        {modalOpenAlbums 
          ? 
            <Modal close={() => handleModalAlbums(user)}><AlbumsPreview user={user}/></Modal> 
          : 
            null
        }
      </AnimatePresence>
    </main>
  </>);
}