import { Container } from './components/Container'
import { NavMenu } from './components/NavMenu'
import { Search } from './components/Search'
import { Home } from './pages/Home'
import './styles/globalStyle.css'

function App() {
  
  return (
    <div className="App">
      <>
        <Container>
          <Home/>          
          <NavMenu/>
        </Container>
      </>
    </div>
  )
}

export default App
