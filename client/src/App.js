import './App.css';
import Welcome from './components/About.js';
import WelcomeButton from './components/WelcomeButton.js';

function App() {
  return (
    <div className="App">
      <Welcome name="Travis"/>
      <div>
      <WelcomeButton kind="primary" onClick={() => alert("clicked!")} />
      </div>
    </div>
  );
}

export default App;
