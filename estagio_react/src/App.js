import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Usuarios from './routes/Usuarios'
import Album from './routes/Album'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Usuarios />} />
        <Route path="album/:id" element={<Album />} />
      </Routes>
    </div>
  );
}

export default App;
