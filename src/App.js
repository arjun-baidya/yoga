import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Component/Header';
import NotFound from './Component/NotFound'
import Footer from './Component/Footer';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Membership from './Component/Membership';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Service></Service>
          </Route>
          <Route path="/membership">
            <Membership></Membership>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
