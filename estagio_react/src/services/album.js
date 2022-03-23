import api from './api'
    
export function getAlbums(id){
  return api().get(`users/${id}/albums`)
    .then(resp => resp.data)
    .catch(e => console.log(e)) 
}

export function getPhotos({userId, albumId}){
  return api().get(`users/${userId}/photos`)
    .then(resp => resp.data.filter(album => album.albumId === parseInt(albumId)))
    .catch(e => console.log(e)) 
}
