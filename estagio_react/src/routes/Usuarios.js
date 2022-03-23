import { useEffect, useState } from 'react';
import Modal from '../components/Modal'
import AlbumsPreview from '../components/AlbumsPreview';
import UserCard from '../components/UserCard';
import {getUsers} from '../services/user'
import '../styles/usuarios.css'
import { AnimatePresence } from 'framer-motion';

export default function Usuarios() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers().then(resp => {
      setUsers(resp)
    })
  }, [])

  const [currentUser, setCurrentUser] = useState({})

  const [modalOpen, setModalOpen] = useState(false)
  const handleModal = (user) => {
    setModalOpen(!modalOpen)
    setCurrentUser(user)
    if(!modalOpen === true){
      localStorage.setItem('user_id', user.id)
      localStorage.setItem('user_name', user.name)
    }else{
      localStorage.removeItem('user_id')
      localStorage.removeItem('user_name')
    } 
  }
  return (<>
    <main>
      <ul class="users_list">
        {users.map((user, index) => 
          <li key={index}>
            <UserCard action={handleModal} user={user}/>
          </li>
        )}
      </ul>
      <AnimatePresence>
        {modalOpen 
          ? 
            <Modal close={() => handleModal(currentUser)}><AlbumsPreview user={currentUser}/></Modal> 
          : 
            null
        }
      </AnimatePresence>
    </main>
  </>);
}