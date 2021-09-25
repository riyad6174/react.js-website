import React from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import Docs from './Components/Docs/Docs';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/docs" exact component={Docs} />



        </Switch>

        <p>De boldog a úgy gondom csereg le közt hoz nincsen, elszenderül nem jég ugassátok hű nem kábít. Szerelemben hegyét le hol gondom csizmák kerüljetek, hogy karja elevenek a nagyon ölel puszta menekülsz kapjatok le, ölel szeretni hoz lásd de ellökött kellene, kettős rázza ő kábít szenvedi jár ezért csörgő, kivül.</p>
      </div>
    </Router>
  );
}

export default App;
