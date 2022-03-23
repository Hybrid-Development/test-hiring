import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Usuarios from './routes/Usuarios'
import Album from './routes/Album'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Usuarios />} />
        <Route path="album/:id" element={<Album />} />
      </Routes>
    </div>
  );
}

export default App;
