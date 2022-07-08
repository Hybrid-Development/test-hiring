import React, { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import Cards from "../components/Cards";
import { iPost, iUsers } from "../interface";
import {
  AlbumContainer as PostContainer,
  PostItem,
  AlbumsListContainer as PostItemContainer,
  Container,
} from "../styles/pages/albums";
import getData from "../utils/getData";

// import { Container } from './styles';

const Posts: React.FC = () => {
  let { userId } = useParams();
  const [posts, setPosts] = useState([] as iPost[]);
  const [user, setUser] = useState<iUsers>({} as iUsers);
  useEffect(() => {
    const getdata = async () => {
      setPosts(
        await getData<iPost[]>(
          `/users/${userId}/posts`
          // {
          //   params: {
          //     albumId,
          //     limit: 10,
          //   },
          // }
        )
      );
      const user = await getData<iUsers[]>("/users", {
        params: {
          id: userId,
        },
      });
      setUser(user[0]);
    };
    getdata();
    // console.log(user);
  }, []);
  // console.log(user);
  return (
    <PostContainer>
      <div style={{ gridArea: "user", paddingLeft: "2vw" }}>
        <Cards user={user} />
      </div>
      <Container gridArea="title_album">
        <div className="header">
          <Link to="/">
            <HiHome size={40} />
          </Link>
          <h1>Lista de Posts</h1>
        </div>
      </Container>
      <Container gridArea="list_album">
        <PostItemContainer>
          {posts.map((post) => (
            <PostItem key={post.id}>
              <span>
                <p>title:</p>
                <p>{post.title}</p>
              </span>
              <span>
                <p>post:</p>
                <p>{post.body}</p>
              </span>
              <Link to={`/user/${userId}/posts/${post.id}/comments`}>
                ver comentarios
              </Link>
            </PostItem>
          ))}
        </PostItemContainer>
      </Container>
    </PostContainer>
  );
};

export default Posts;
