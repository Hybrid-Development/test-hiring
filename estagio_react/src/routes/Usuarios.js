import { useEffect, useState } from 'react';
import Modal from '../components/Modal'
import AlbumsPreview from '../components/AlbumsPreview';
import UserCard from '../components/UserCard';
import {getUsers} from '../services/user'
import '../styles/usuarios.css'
import { AnimatePresence } from 'framer-motion';
import { useUserContext } from '../contexts/user';

export default function Usuarios() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  const { setUser } = useUserContext()
  
  useEffect(() => {
    getUsers().then(resp => {
      setUsers(resp)
    })
  }, [])


  const [modalOpen, setModalOpen] = useState(false)
  const handleModal = (user) => {
    setModalOpen(!modalOpen)
    if(!modalOpen === true){
      setUser(user)
      setCurrentUser(user)
    }else{
      setUser({})
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