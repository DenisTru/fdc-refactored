import './styles/App.scss';
import { Overview } from '../components/ProductOverview/Overview'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        navbar here
      </header>
      <body className="App-body">
      <Overview></Overview>
      </body>
      <footer className='App-footer'>
        footer here
      </footer>
    </div>
  );
}

export default App;
