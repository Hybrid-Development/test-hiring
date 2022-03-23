import { useEffect, useState } from 'react'
import { getAlbums } from '../services/album'
import '../styles/albumsPreview.css'
import { AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal'
import Album from './Album';

export default function AlbumPreiew(props){
  const [albums, setAlbums] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [currentAlbum, setCurrentAlbum] = useState({})

  useEffect(() => {
    getAlbums(props.user.id).then(resp => {
      setAlbums(resp)
    })
  }, [props.user])

  if(!albums.length){
    return <p>loading...</p>
  }


  const handleModal = (album) => {
    setModalOpen(!modalOpen)
    if(!modalOpen === true){
      setCurrentAlbum(album)
    }else{
      setCurrentAlbum({})
    } 
  }
  
  return <div className="albums_container">
    <ul class="albums_list">
      {albums.map((album) => 
        <li key={album.id}>
          <p>{album.title}</p>
          <div>
            <button type="button" onClick={() => handleModal(album)}>Ver Album</button>
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