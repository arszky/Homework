import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import CreatePlaylist from "./page/CreatePlaylist";
import Login from "./page/Login/Index";
import Navbar from "./components/Navbar";

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <Router>
      <Switch>
        <Route path={"/create-playlist"}>
          <Navbar />
          {isLogin ? <CreatePlaylist /> : <Redirect to={"/"} />}
        </Route>
        <Route path={"/"}>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
