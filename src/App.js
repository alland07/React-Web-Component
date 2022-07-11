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

class RenderWBC extends HTMLElement {
  render(){
    <App/>
  }
}

export const createDefine = () => {
  customElements.define('react-wbc-checkbox', RenderWBC);
}
