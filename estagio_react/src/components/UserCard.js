import '../styles/userCard.css'

export default function UserCard(props){
  return <>
    <div class="usercard_wrapper">
      <div class="usercard_header">
        <div class="usercard_avatar"/>
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
        <button type="button" onClick={() => props.action(props.user)}>ver galeria</button>
      </div>}
    </div>
  </>
}