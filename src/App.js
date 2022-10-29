import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Screen/Home.js'

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Header />
        <Home />
      </header>
    </div>
  );
}

export default App;
