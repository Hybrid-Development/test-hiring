import api from "./api";

export function getPosts(userId){
  return api().get(`users/${userId}/posts`)
    .then(resp => resp.data)
    .then(async posts => {
      let result = []
      let allComments = await getComments()
      for(let p = 0; p < posts.length; p++){
        let post = posts[p]
        let comments = allComments.filter(com => com.postId == post.id)
        result.push({...post, comments})
      }
      return result
    })
    .catch(e => console.log(e)) 
}

export function getPost(id){
  return api().get(`posts/${id}`)
    .then(resp => resp.data)
    .catch(e => console.log(e)) 
}

export function getComments(){
    return api().get('/comments')
        .then(resp => resp.data)
        .catch(e => console.log(e))
}