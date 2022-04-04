
import './App.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Packages from './components/Packages/Packages';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="">
      <AuthProvider>
    <Router >
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
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/registration">
              <Registration></Registration>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
    </Router>
    </AuthProvider>
  </div>
  );
}

export default App;
