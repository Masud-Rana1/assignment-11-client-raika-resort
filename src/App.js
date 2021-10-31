import logo from "./logo.svg";
import "./App.css";
import Header from "./components/pages/Header/Header";
import Items from "./components/pages/items/Items";
import Footer from "./components/pages/Footer/Footer";
import Pickup from "./components/pages/Pickup/Pickup";
import Dinning from "./components/pages/Dinning/Dinning";
import { BrowserRouter as Router, Switch ,Route} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import ItemDetails from "./components/pages/ItemDetails/ItemDetails";
import Login from "./components/pages/Login/Login/Login";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./components/pages/Login/PrivateRoute/PrivateRoute";
import AddService from "./components/pages/AddService/AddService";

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/items">
            <Items></Items>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route  path="/dinning">
            <Dinning></Dinning>
          </Route>
          <Route  path="/dropoff">
            <Pickup></Pickup>
          </Route>
          <PrivateRoute  path="/addservice">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute  path="/details/:_id">
            <ItemDetails></ItemDetails>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;