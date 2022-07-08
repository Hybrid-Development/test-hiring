import React, { useEffect, useState } from "react";
import Card from "../components/Cards";
import { iUsers } from "../interface";
import { HomeContainer, UserContainer } from "../styles/pages/home";
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
      <h1>lista de usuarios</h1>

      <UserContainer>
        {users.map((user) => (
          <Card user={user} />
        ))}
      </UserContainer>
    </HomeContainer>
  );
};
export default Home;
