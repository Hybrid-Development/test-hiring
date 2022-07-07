import React, { useEffect, useState } from "react";
import Card from "../components/Cards";
import { iUsers } from "../interface";
import { HomeContainer, UserConatiner } from "../styles/pages/home";
import getData from "../utils/getData";

// import { Container } from './styles';

const Home: React.FC = () => {
  const [users, setUsers] = useState([] as iUsers[]);
  useEffect(() => {
    const getdata = async () => {
      setUsers(await getData<iUsers[]>("/users"));
    };
    getdata();
  }, []);

  return (
    <HomeContainer>
      <UserConatiner>
        {users.map((user) => (
          <Card user={user} />
        ))}
      </UserConatiner>
    </HomeContainer>
  );
};
export default Home;
