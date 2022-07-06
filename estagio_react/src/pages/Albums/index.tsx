import Album from 'components/Album'
import { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import { api } from 'services/api'
import { IAlbum, IPhoto } from 'types/albums'

import * as S from './styles'

function Albums() {
  const { id } = useParams()

  const [modalOpen, setModalOpen] = useState(false)
  const [albums, setAlbums] = useState<IAlbum[]>([])
  const [albumPhotos, setAlbumPhotos] = useState<IPhoto[]>([])

  useEffect(() => {
    api.get(`/users/${id}/albums`).then(response => {
      setAlbums(response.data)
    })
  }, [id])

  function handleCloseModal() {
    setModalOpen(false)
  }

  function handleGetPhotos(id: number) {
    setModalOpen(true)
    api.get(`/albums/${id}/photos?_page=1&_limit=10`).then(response => {
      setAlbumPhotos(response.data)
    })
  }

  return (
    <S.Wrapper>
      {modalOpen && (
        <S.Backdrop onClick={handleCloseModal}>
          <S.AlbumPhotos onClick={event => event.stopPropagation()}>
            <FiX size={24} color="#fff" className="close-icon" />
            {albumPhotos.map(photo => (
              <img src={photo.thumbnailUrl} alt={photo.title} key={photo.id} />
            ))}
          </S.AlbumPhotos>
        </S.Backdrop>
      )}

      <S.Albums>
        {albums.map(album => (
          <Album
            key={album.id}
            name={album.title}
            onOpenModal={() => handleGetPhotos(album.id)}
          />
        ))}
      </S.Albums>
    </S.Wrapper>
  )
}

export default Albums
