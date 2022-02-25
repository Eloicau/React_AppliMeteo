
import './App.css';
import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header style={{ marginBotton: 150}}>
        <h1 className="App-titre">L'application météo</h1>

        <nav className="App-header" style={{ borderBotton : "solid 1px", paddingBottom: "lrem" }}>
          <Link className="App-link" to="/accueil" replace>Accueil</Link> | <Link className="App-link" to="/recherche" replace>Recherche</Link> | <Link className="App-link" to="/favoris" replace>Favoris</Link> 
        </nav>
      </header>
      <Outlet/>
    </div>
  );
}

export default App;
