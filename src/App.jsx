import { Container } from "./components/Container"
import { NavMenu } from "./components/NavMenu"
import { Home } from "./pages/Home"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './styles/globalStyle.css'
import { MovieDetails } from "./pages/MovieDetails/"
import { Reservation } from "./pages/Reservation"
import { TicketProvider } from "./context/TicketContext"
function App() {
  
  return (
    <>
    <TicketProvider>
    <BrowserRouter>
      <Container>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie-details/:id" element={<MovieDetails/>}/>
        <Route path="/reservation" element={<Reservation/>}/>
      </Routes>
        <NavMenu/>
      </Container>
    </BrowserRouter>
    </TicketProvider>
    </>
  )
}

export default App
