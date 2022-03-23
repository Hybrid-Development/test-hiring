import '../styles/userCard.css'
import { BsPerson } from 'react-icons/bs'

export default function UserCard(props){
  return <>
    <div class="usercard_wrapper">
      <div class="usercard_header">
        <div class="usercard_avatar">
          <BsPerson fontSize={28}/>
        </div>
        <p>{props.user.name}</p>
        <div style={{flex: 1}} />
        {props.hasOwnProperty('details') && props.details &&
          <div class="usercard_content">
            <div className="usercard_content_item">
              <p>email</p>
              <p>{props.user.email}</p>
            </div>
            <div className="usercard_content_item">
              <p>phone</p>
              <p>{props.user.phone}</p>
            </div>
            <div className="usercard_content_item">
              <p>site</p>
              <p>{props.user.website}</p>
            </div>            
            <div className="usercard_content_item">
              <p>company</p>
              <p>{props.user.company.name}</p>
            </div>
          </div>}      
      </div>

      {props.hasOwnProperty('action') && <div class="usercard_footer">
        <button type="button" class="gallary-btn" onClick={() => props.action[0](props.user)}>
          posts
        </button>
        <div style={{flex: 1}}/>
        <button type="button" class="gallary-btn" onClick={() => props.action[1](props.user)}>
          galeria
        </button>        
      </div>}
    </div>
  </>
}