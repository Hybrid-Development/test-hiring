import { Link } from 'react-router-dom'
export default function AlbumPreiew(props){
  return <>
    <div>user info</div>
    <ul>
        {[...new Array(7)].map((_, index) => 
            <li><Link to={`/album/${index}`}>album {index}</Link></li>)}
    </ul>
  </>
}