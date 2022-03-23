import { useEffect, useState } from 'react'
import { getPosts } from '../services/post'
import { useUserContext } from '../contexts/user';
import '../styles/posts.css'
import { BsPerson } from 'react-icons/bs'
import Loader from './Loader'


export default function UserPosts(props){
  const [posts, setPosts] = useState([])
  const { user } = useUserContext()

  useEffect(() => {
    let storage = JSON.parse(window.localStorage.getItem('posts')) || {}
    if(Object.keys(storage).length && Object.keys(storage).includes(user.id.toString())) {   
        setPosts([...storage[user.id]])
        return
    }
    getPosts(user.id).then(resp => {
      setPosts(resp)
    })
  }, [props.user])

  if(!posts.length){
    return <div style={{
      height: '93vh', 
      width: '100%', 
      display: 'grid', 
      placeContent: 'center'}}><Loader /></div>
  }

  return <div className="posts_container">
    <ul class="posts_list">
      {posts.map((post) => 
        <li class="posts_list_item" key={post.id}>
          <PostIntance posts={posts} post={post} setPosts={setPosts}/>
        </li>)}
    </ul>
  </div>
}

const PostIntance = ({post, posts,setPosts}) => {
  const [currentPost, setCurrentPost] = useState({})
  const [editedId, setEditedId] = useState(null)

  const { user } = useUserContext()


  const viewComments = (post) => {
    if(post.id == currentPost.id){
        setCurrentPost({})
    }else{
        setCurrentPost(post)
    }
  }

  const editMode = (post) => {
    if(editedId == post.id){
        setEditedId(null)
    }else{
        setEditedId(post.id)
    }
  }
  
  const handleChangeBody = (e, post) => {
    let index = posts.findIndex(el => el.id == post.id)
    let currentPost = posts[index]
    currentPost.body = e.target.value
    setPosts([...posts])  
    let userId = user.id
    let storage = JSON.parse(window.localStorage.getItem('posts')) || {}
    if(Object.keys(storage).length) {
        storage[userId] = posts.map(item => item)
        localStorage.setItem('posts', JSON.stringify({...storage}))
    }else{
        localStorage.setItem('posts', JSON.stringify({...storage, [userId]: posts.map(item => item)}))
    }
  }

  const handleChangeTitle = (e, post) => {
    let index = posts.findIndex(el => el.id == post.id)
    let currentPost = posts[index]
    currentPost.title = e.target.value
    setPosts([...posts])  
    let userId = user.id
    let storage = JSON.parse(window.localStorage.getItem('posts')) || {}
    if(Object.keys(storage).length) {
        storage[userId] = posts.map(item => item)
        localStorage.setItem('posts', JSON.stringify({...storage}))
    }else{
        localStorage.setItem('posts', JSON.stringify({...storage, [userId]: posts.map(item => item)}))
    }
  }

  const deletePost = (post) => {
    let items = posts.filter(el => el.id != post.id)
    setPosts([...items])  
    let userId = user.id
    let storage = JSON.parse(window.localStorage.getItem('posts')) || {}
    if(Object.keys(storage).length) {
        storage[userId] = items.map(item => item)
        localStorage.setItem('posts', JSON.stringify({...storage}))
    }else{
        localStorage.setItem('posts', JSON.stringify({[userId]: items.map(item => item)}))
    }
  }

  return <>{
            (editedId == post.id) ?
            <>
              <input value={post.title} onChange={(e) => handleChangeTitle(e, post)}/>
              <textarea className="body" value={post.body} onChange={(e) => handleChangeBody(e, post)}/>
            </>
            :
            <>
              <p class="title">{post.title}</p>
              <p class="body">{post.body}</p>
            </>
          }
          <div style={{flex: 1}}/>
          <div>
            <button 
              className="btn"
              type="button" 
              onClick={() => viewComments(post)}>Ver coments</button>
            <button 
              className="btn"
              type="button" 
              onClick={() => editMode(post)}>
                {(editedId == post.id) ? 'salvar' : 'editar'}
              </button>
            {(editedId == post.id) ? 
              <button 
                className="btn"
                type="button" 
                onClick={() => deletePost(post)}>deletar</button>
                : null
            }
          </div>
          {
            (Object.keys(currentPost).length &&
            currentPost.comments.length && 
            currentPost.id == post.id) ?
              <ul className="comments_list">
                {currentPost.comments.map(comment => 
                    <li className="comments_list_item">
                        <div className="comment_avatar">
                          <BsPerson fontSize={28}/>
                        </div>
                        <div className="comment_content">
                          <p>{comment.email}</p>
                          <p>{comment.body}</p>
                        </div>
                    </li>
                )}
              </ul> 
            : null
          }</>
  

}