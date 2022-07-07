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
      <Link to={`/albums/${user.id}`} rel="noopener noreferrer">
        <ImageContainer>
          {/* <BsPersonCircle width="80px" height="80px" /> */}
          <BsFillFilePersonFill size={150} />
        </ImageContainer>
      </Link>

      <DetailsContainer>
        <div>
          <Link to={`/albums/${user.id}`} rel="noopener noreferrer">
            <p>{user.name}</p>
          </Link>
        </div>
      </DetailsContainer>
    </CardContainer>
  );
};

export default Cards;
