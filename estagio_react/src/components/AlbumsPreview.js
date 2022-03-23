import React, { useEffect, useState } from 'react'
import { getAlbums } from '../services/album'
import '../styles/albumsPreview.css'
import { AnimatePresence } from 'framer-motion';
import Modal from './Modal'
import Album from './Album';
import { useUserContext } from '../contexts/user';
import Loader from './Loader'

export default function AlbumPreiew(props){
  const [albums, setAlbums] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [currentAlbum, setCurrentAlbum] = useState({})

  const { setPath } = useUserContext()

  useEffect(() => {
    getAlbums(props.user.id).then(resp => {
      setAlbums(resp)
    })
  }, [props.user])


  if(!albums.length){
    return <div style={{
      height: '93vh', 
      width: '100%', 
      display: 'grid', 
      placeContent: 'center'}}><Loader /></div>
  }


  const handleModal = (album) => {
    setModalOpen(!modalOpen)
    if(!modalOpen === true){
      setCurrentAlbum(album)
      setPath('photos')
    }else{
      setCurrentAlbum({})
      setPath('albums')
    } 
  }
  
  return <div className="albums_container">
    <ul class="albums_list">
      {albums.map((album) => 
        <li key={album.id}>
          <p>{album.title}</p>
          <div style={{flex: 1}}/>
          <div>
            <button 
              className='album-btn'
              type="button" 
              onClick={() => handleModal(album)}>Ver Album</button>
          </div>
        </li>)}
    </ul>
    <AnimatePresence>
      {modalOpen 
        ? 
          <Modal close={() => handleModal(props.user)}><Album id={currentAlbum.id}/></Modal> 
        : 
          null
      }
    </AnimatePresence>
  </div>
}