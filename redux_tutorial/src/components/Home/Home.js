import {
  Box,
  Button,
  CircularProgress,
  Container,
  Icon,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { create } from "apisauce";

import userAction from "../../redux/actions/userAction";
import searchAction from "../../redux/actions/searchAction";
import isLoggedAction from "../../redux/actions/isLoginAction";

import { connect } from "react-redux";

const baseUrl = "https://api.github.com/";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginTop: theme.spacing(10),
    },
  },
}));

const style = {
  marginTop: "70px",
  marginLeft: "10px",
};

const Home = (props) => {
  const classes = makeStyles();

  const [username, setUsername] = useState(props.userKey);

  const [userInfo, setUserInfo] = useState(props.user);

  const [errorMessage, setErrorMessage] = useState(null);

  const handleUsernameInput = (event) => {
    console.log(event.target.value);

    setUsername(event.target.value);
  };

  const api = create({
    baseURL: baseUrl,
    headers: { Accept: "application/json" },
  });

  const getUserInfo = (user) => {
    api
      .get(`users/${user}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.message) {
          setErrorMessage(response.data.message);
        } else {
          props.userInfoUpdate(response.data);
          setUserInfo(response.data);
          setErrorMessage(null);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = () => {
    if (username) {
      getUserInfo(username);
    }
  };

  return (
    <div style={style}>
      {/* <CircularProgress  /> */}

      <Container>
        <form>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            // value={username}
            onChange={handleUsernameInput}
          ></TextField>
          <Button
            onClick={handleSearch}
            style={{ padding: "10px", margin: "2px" }}
            variant="contained"
            color="secondary"
          >
            Search
          </Button>
        </form>
      </Container>
      {userInfo ? (
        <Container fluid>
          <Box>
            <h1 align="center">Search Result : </h1>
          </Box>
          <div style={{ float: "left", width: "70%" }}>
            <ul>
              <li>
                Username :
                <a href={`https://github.com/${userInfo.login}`}>
                  {" "}
                  {userInfo.login}
                </a>{" "}
              </li>
              <li>Name : {userInfo.name}</li>
              <li>Location : {userInfo.location}</li>
              <li>Bio : {userInfo.bio}</li>
              <li>
                Twitter Username :{" "}
                <a href={`https://twitter.com/${userInfo.twitter_username}`}>
                  {userInfo.twitter_username}
                </a>{" "}
              </li>
              <li>Total Public Repos : {userInfo.public_repos}</li>
              <li>Total Public Gists : {userInfo.public_gists}</li>
              <li>Total Followers : {userInfo.followers}</li>
              <li>Total Following : {userInfo.following}</li>
              <li>
                Register At : {new Date(userInfo.created_at).toDateString()}
              </li>
            </ul>
          </div>
          <div style={{ float: "right", width: "30%" }}>
            <img src={userInfo.avatar_url} />
          </div>
        </Container>
      ) : errorMessage ? (
        errorMessage
      ) : (
        <h1 align="center">Haven't Searched Anything</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.userInfo,
    searchKey: state.searchKey,
    isLogin: state.isLogin,
  };
};

const mapDispatchTopProps = (dispatch) => {
  return {
    userInfoUpdate: (info) => dispatch(userAction(info)),
    searchKeyUpdate: (key) => dispatch(searchAction(key)),
  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(Home);
