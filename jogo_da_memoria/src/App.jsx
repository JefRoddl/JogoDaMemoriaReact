import Game from "./components/game"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>jogo da Memória</h1>
      <Game />
    </>
  )
}

export default App
