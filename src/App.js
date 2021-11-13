import logo from './logo.svg';
import './App.css';
import WorkoutsContainer from './containers/WorkoutsContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <WorkoutsContainer />
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;
