import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Packages from './components/Packages/Packages';
import Blog from './components/Blog/Blog';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="">
    <Router >
      <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/blog">
              <Blog></Blog>
            </Route>
            <Route exact path="/packages">
              <Packages></Packages>
            </Route>
          </Switch>
      <Footer></Footer>    
    </Router>
  </div>
  );
}

export default App;
