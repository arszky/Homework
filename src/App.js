import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import CreatePlaylist from "./page/CreatePlaylist";
import Login from "./page/Login/Index";

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <Router>
      <Switch>
        <Route path={"/create-playlist"}>
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
