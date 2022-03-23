export default function Thumbnail(props){
  return <div className="thumbnail_wrapper">
    <div className="thumbnail_img_wrapper">
        <img src={props.photo.thumbnailUrl}/>
    </div>
    <div className="thumbnail_info">

    
    </div>
  
  </div>
}