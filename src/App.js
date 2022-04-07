
import './App.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Packages from './components/Packages/Packages';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PackagesDetails from './components/Packages/PackagesDetails';
import MyOrders from './components/DashboardPages/MyOrders';
import AllOrders from './components/DashboardPages/AllOrders';
import AddPackage from './components/DashboardPages/AddPackage';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import ManageAllPackage from './components/DashboardPages/ManageAllPackage';
import UpdatePackage from './components/DashboardPages/UpdatePackage';

function App() {
  return (
    <div className="">
      <AuthProvider>
    <Router >
      <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/blog">
              <Blog></Blog>
            </PrivateRoute>
            <Route exact path="/packages">
              <Packages></Packages>
            </Route>
            <PrivateRoute exact path="/home/:pacId">
              <PackagesDetails></PackagesDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/allOrders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/managePackage">
              <ManageAllPackage></ManageAllPackage>
            </PrivateRoute>
            <PrivateRoute exact path="/packages/update/:id">
              <UpdatePackage></UpdatePackage>
            </PrivateRoute>
            <PrivateRoute exact path="/addPackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
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
          <Footer></Footer>
    </Router>
    </AuthProvider>
  </div>
  );
}

export default App;
