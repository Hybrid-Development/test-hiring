import { useState } from 'react';
import Modal from '../components/Modal'
import AlbumPreiew from '../components/AlbumPreview';
export default function Usuarios() {
  const [modalOpen, setModalOpen] = useState(false)
  const handleModal = () => {
    setModalOpen(!modalOpen)
    
  }
  return (<>
    <main style={{ padding: "1rem 0" }}>
      <ul>
        {[...new Array(9)].map((_, index) => 
          <li><button onClick={() => handleModal()}>usuario {index}</button></li>
        )}
      </ul>
    </main>
    {modalOpen ? <Modal><AlbumPreiew data={{}}/></Modal> : null}
  </>);
}