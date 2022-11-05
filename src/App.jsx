import { Container } from "./components/Container"
import { NavMenu } from "./components/NavMenu"
import { Home } from "./pages/Home"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './styles/globalStyle.css'
import { MovieDetails } from "./pages/MovieDetails"
function App() {
  
  return (
    <>
    <BrowserRouter>
      <Container>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie-details/:id" element={<MovieDetails/>}/>
      </Routes>
        <NavMenu/>
      </Container>
    </BrowserRouter>
    </>
  )
}

export default App
