import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Voici le titre de l'enfant</h1>
      <input type="checkbox"></input>
    </div>
  );
}

export default App;

customElements.define('react-wbc-checkbox', App);
