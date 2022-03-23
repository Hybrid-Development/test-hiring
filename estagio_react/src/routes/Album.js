import { useParams } from 'react-router-dom'
export default function Usuarios() {
  const { id } = useParams()
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>album {id}</h2>
      <ul>
        {[...new Array(7)].map((_, index) => <li>foto {index}</li>)}
      </ul>
    </main>
  );
}