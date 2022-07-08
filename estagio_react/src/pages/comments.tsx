import React, { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import Cards from "../components/Cards";
import { iComment, iPost, iUsers } from "../interface";
import {
  AlbumContainer as PostContainer,
  PostItem,
  AlbumsListContainer as PostItemContainer,
  Container,
} from "../styles/pages/albums";
import getData from "../utils/getData";

// import { Container } from './styles';

const Comments: React.FC = () => {
  let { userId, postId } = useParams();
  const [posts, setPosts] = useState([] as iPost[]);
  const [user, setUser] = useState<iUsers>({} as iUsers);
  const [comments, setComments] = useState<iComment[]>([] as iComment[]);
  useEffect(() => {
    const getdata = async () => {
      setPosts(
        await getData<iPost[]>(`/users/${userId}/posts`, {
          params: {
            id: postId,
          },
        })
      );
      setComments(
        await getData<iComment[]>(`/posts/${postId}/comments`, {
          params: {
            userId,
          },
        })
      );

      const user = await getData<iUsers[]>("/users", {
        params: {
          id: userId,
        },
      });
      setUser(user[0]);
    };
    getdata();
    console.log(comments);
  }, []);
  // console.log(user);
  return (
    <PostContainer>
      <div style={{ gridArea: "user", paddingLeft: "2vw" }}>
        <Cards user={user} />
      </div>
      <Container gridArea="title_album">
        <div>
          <Link to="/">
            <HiHome size={40} />
          </Link>
          <h1>Post</h1>
        </div>
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
              {/* <Link to={`/posts/${post.id}`}>ver comentarios</Link> */}
            </PostItem>
          ))}
        </PostItemContainer>
      </Container>
      <Container gridArea="list_album">
        <PostItemContainer>
          {comments.map((comment) => (
            <PostItem key={comment.id}>
              <span>
                <p>name:</p>
                <p>{comment.name}</p>
              </span>
              <span>
                <p>comment:</p>
                <p>{comment.body}</p>
              </span>
            </PostItem>
          ))}
        </PostItemContainer>
      </Container>
    </PostContainer>
  );
};

export default Comments;
