import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Albums from 'pages/Albums'
import Home from 'pages/Home'
import Posts from 'pages/Posts'
import PostEdit from 'pages/PostEdit'
import { useState } from 'react'
import { IPost } from 'types/posts'

function Router() {
  const [posts, setPosts] = useState<IPost[]>([])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums/:id" element={<Albums />} />
        <Route
          path="/posts"
          element={<Posts posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/posts/edit/:id"
          element={<PostEdit posts={posts} setPosts={setPosts} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
