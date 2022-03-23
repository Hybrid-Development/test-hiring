import { useEffect, useState } from 'react';
import { getPost } from '../services/post'
import '../styles/post.css'
import { useUserContext } from '../contexts/user';

export default function Post(props) {
  const [post, setPost] = useState()
  const [comments, setComments] = useState([])
  const { user } = useUserContext()

  useEffect(() => {
    getPost({userId: user.id}).then(resp => {
      setPost(resp)
    })
  }, [props.id])

  if(!post.length){
    return <p>loading...</p>
  }

  return (<>
    <div>{JSON.stringify(post, null, '\t')}</div>
    <div className="comments_container">
      <ul className="comments_list">
        {comments.map(comment => 
          <li key={comment.id}>{JSON.stringify(comment, null, 2)}</li>)}
      </ul>
    </div></>
  );
}
