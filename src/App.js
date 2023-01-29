import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import SimpleBottomNavigation from './components/MainNav'
import Movies from './Pages/Movies/Movies'
import Series from './Pages/Series/Series'
import Trending from './Pages/Trending/Trending'
import Search from './Pages/Search/Search'
import { Container } from '@mui/material'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route exact path="/" element={<Trending />} />
            <Route exact path="/movies" element={<Movies />} />
            <Route exact path="/series" element={<Series />} />
            <Route exact path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  )
}

export default App
