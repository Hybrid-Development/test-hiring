import '../styles/header.css'
export default function Header(){
  return <div class="header_container">
    <div className="header_wrapper">
      <span class="header_logo">
        <h1>galeria <span>photos</span></h1>
        <div style={{flex: 1}}/>
      </span>
      <div className="header_sub">
        <p>{}</p>
      </div>
    </div>
  </div>
}