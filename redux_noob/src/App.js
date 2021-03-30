import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { login, logout } from "./actions";

const App = (props) => {
  const isLoggedIn = props.isLoggedIn;

  console.log(props);

  const loginHandler = () => {
    props.login();
  };

  const logoutHandler = () => {
    props.logout();
  };

  return (
    <>
      <div>
        <div style={{ float: "left" }}>
          <a href="/">
            <b style={{ fontSize: "30px" }}>REDUX</b>
          </a>
        </div>
        <div></div>
        <div style={{ float: "right" }}>
          {isLoggedIn ? (
            <div>
              <button
                style={{
                  padding: "5px",
                  margin: "5px",
                  fontSize: "20px",
                  backgroundColor: "blue",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Profile
              </button>

              <button
                style={{
                  padding: "5px",
                  margin: "5px",
                  fontSize: "20px",
                  backgroundColor: "red",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={logoutHandler}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              style={{
                padding: "5px",
                margin: "5px",
                fontSize: "20px",
                backgroundColor: "green",
                color: "white",
                cursor: "pointer",
              }}
              onClick={loginHandler}
            >
              login
            </button>
          )}
        </div>
      </div>

      <div>
        {" "}
        <h1 align="center">Welcome Motherfucker!</h1>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
