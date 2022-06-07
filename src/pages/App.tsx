import './styles/App.scss';
import { Overview } from '../components/ProductOverview/Overview'
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
      <Route path="/" element={<Overview></Overview>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/About" element={<About />} />
      </Routes>
      </div>
      <footer className='App-footer'>
        footer here
      </footer>
    </div>
  );
}

export default App;
