import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Books from './components/Books.jsx';
import Characters from './components/Characters.jsx';
import Houses from './components/Houses.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <BrowserRouter>
              <Navbar />
              <div className="container mt-2" style={{ marginTop: 40 }}>
                  <Switch>
                      <Route exact path="/books">
                          <Books />
                      </Route>
                      <Route path="/characters">
                          <Characters />
                      </Route>
                      <Route path="/houses">
                          <Houses />
                      </Route>
                  </Switch>
              </div>
          </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
