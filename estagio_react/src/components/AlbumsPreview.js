import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAlbums } from '../services/album'
export default function AlbumPreiew(props){
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    getAlbums(props.user.id).then(resp => {
      setAlbums(resp)
    })
  }, [props.user])

  if(!albums.length){
    return <p>loading...</p>
  }
  return <>
    <div>{JSON.stringify(props.user, null, '\t')}</div>
    <ul>
        {albums.map((album) => 
          <li key={album.id}><Link to={`/album/${album.id}`}>album {album.id}</Link></li>)}
    </ul>
  </>
}