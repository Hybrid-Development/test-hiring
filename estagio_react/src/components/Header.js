import '../styles/header.css'
import { useUserContext } from '../contexts/user'
import { BsSearch } from 'react-icons/bs'
export default function Header(){
  const { user, path } = useUserContext()

  return <div class="header_container">
    <div className="header_wrapper">
      <div>
        <span class="header_logo">
          <h1>galeria <span>{path}</span></h1>
        </span>
        <span className="header_sub">
          <p>{user.name}</p>
        </span>
      </div>
      
      <div class="header_search">
        <BsSearch fontSize={28}/>
      </div>
    </div>
  </div>
}