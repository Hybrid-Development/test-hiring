import { BrowserRouter, Route, Routes } from "react-router-dom";
import Albums from "./pages/albums";

// import Albums from 'pages/Albums';
import Home from "./pages/home";
// import Posts from 'pages/Posts';
// import PostEdit from 'pages/PostEdit';
// import { useState } from 'react';
// import { iPost } from 'types/posts';

function Router() {
  // const [posts, setPosts] = useState<iPost[]>([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/albums/:userId" element={<Albums />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
