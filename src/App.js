import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AdminScreen from "./screens/AdminScreen";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
          <AuthButton></AuthButton>
            <header>
              <Link to="/" className="logo">Cuci Yuk!</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/admin">My Order History</Link>
            </header>
            <main>
              <Route path="/login">
                <LoginPage></LoginPage>
              </Route>
              <Route path="/admin" component={AdminScreen} />
              <PrivateRoute path="/profile">
              <PrivatePage></PrivatePage>
              </PrivateRoute>
              <Route path="/" component={HomeScreen} exact />
            </main>
            <footer>Cuci Yuk! Store</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
const fakeAuth = {
  isAuthenticated:false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb,100);
  },
  signout(cb){
    fakeAuth.isAuthenticated = true;
    setTimeout(cb,100);
  }
};
function AuthButton(){
  let history = useHistory();
  return fakeAuth.isAuthenticated ? (
    <button onClick={()=>{
      fakeAuth.signout(()=>history.push("/"));
    }}
    >SignOut</button>
  ) : (
    <p></p>
  );
}
function PrivateRoute({children, ...rest}){
  return(
    <Route {...rest}
    render={({location}) =>
    fakeAuth.isAuthenticated ? (
      children
    ) : (
      <Redirect to={{pathname:"/login",
                      state: {from: location}
    }}></Redirect>
    )
  } ></Route>
  );
}
function LoginPage(){
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || {from : {pathname:"/"}};
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button class="button primary" onClick={login}>Log in</button>
    </div>
  );
}
function PrivatePage(){
  return(
    <ProfileScreen></ProfileScreen>
  )
}

export default App;
