import { Button } from "./components/Button"

function App() {
  let nome = "APP"
  return (
    <div className="App">
      <h1>{nome}</h1>
      <Button text="Confirmar" variant="danger" />
      <Button text="OK" variant="success" />
      <Button text="Delete" />
    </div>
  )
}

export default App
