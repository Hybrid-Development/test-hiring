export type IPost = {
  id: number
  title: string
  body: string
}

export type IComment = {
  id: number
  postId: number
  name: string
  email: string
  body: string
}
