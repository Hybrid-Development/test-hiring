import { Link } from "react-router-dom";
import { CardContainer, DetailsContainer, ImageContainer } from "./styles";
import { BsPersonCircle, BsFillFilePersonFill } from "react-icons/bs";
import { iUsers } from "../../interface";
interface Props {
  // image: iImagem[];
  user: iUsers;
  // post: iMappedVideoToPost;
}

const Cards: React.FC<Props> = ({ user }) => {
  // const imageSrc = image ? image[0].url : "/images/banner.png";

  return (
    <CardContainer>
      <Link to={`/user/${user.id}/albums`} rel="noopener noreferrer">
        <ImageContainer>
          {/* <BsPersonCircle width="80px" height="80px" /> */}
          <BsFillFilePersonFill size={150} />
        </ImageContainer>
      </Link>

      <DetailsContainer>
        <div>
          <Link to={`/user/${user.id}/albums`} rel="noopener noreferrer">
            <p>{user.name}</p>
          </Link>
          <Link to={`/user/${user.id}/posts`} rel="noopener noreferrer">
            <p>Ver Posts</p>
          </Link>
        </div>
      </DetailsContainer>
    </CardContainer>
  );
};

export default Cards;
