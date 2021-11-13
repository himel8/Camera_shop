import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Explore from "./Pages/Explore/Explore";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/shop">
              <Explore />
            </PrivateRoute>
            <PrivateRoute path="/purchase">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/shop:id">
              <Explore />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
