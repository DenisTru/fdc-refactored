import './styles/App.scss';
import { Overview } from '../components/ProductOverview/Overview'
import { RatingReviews } from '../components/RatingsReviews/RatingReviews';
import { NavigationBar } from '../components/Navbar/NavigationBar'
import { About } from './About'
import { Home } from './Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavigationBar />
      </header>
      <div className="App-body">
      <Routes>
      <Route path="/" element={<RatingReviews/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/About" element={<About />} />
      </Routes>
      </div>
      <footer className='App-footer'>

      </footer>
    </div>
  );
}

export default App;
