import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Usuarios from './routes/Usuarios'
import Header from './components/Header'
import { UserContext } from './contexts/user';

function App() {
  return (
    <UserContext>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Usuarios />} />
        </Routes>
      </div>
    </UserContext>
  );
}

export default App;
