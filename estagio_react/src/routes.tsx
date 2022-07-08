import { BrowserRouter, Route, Routes } from "react-router-dom";
import Albums from "./pages/albums";
import Comments from "./pages/comments";

import Home from "./pages/home";
import Photos from "./pages/photos";
import Posts from "./pages/posts";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId/albums" element={<Albums />} />
        <Route
          path="/user/:userId/albums/:albumId/photos"
          element={<Photos />}
        />
        <Route path="/user/:userId/posts" element={<Posts />} />
        <Route
          path="/user/:userId/posts/:postId/comments"
          element={<Comments />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
