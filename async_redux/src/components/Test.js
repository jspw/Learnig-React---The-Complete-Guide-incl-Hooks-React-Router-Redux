import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../redux/actions";

const Test = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const errorMessage = useSelector((state) => state.error);

  const [username, setUsername] = useState(null);

  console.log(users);

  const fetchUser = () => {
    console.log(username);
    return function (dispatch) {
      dispatch(fetchUsersRequest());
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((response) => {
          const users = response.data;
          console.log(users);
          dispatch(fetchUsersSuccess(users));
        })
        .catch((error) => {
          dispatch(fetchUsersFailure(error.message));
          console.log(error.message);
        });
    };
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleForm = (event) => {
    event.preventDefault();
    dispatch(fetchUser());
  };

  return (
    <Container>
      <h1 align="center">Hello From Async Redux!</h1>
      <Row className="justify-content-center">
        <Col>
          <Form onSubmit={handleForm}>
            <Form.Group>
              <Form.Control
                onChange={handleUsername}
                placeholder="Username"
                value={username}
              ></Form.Control>
              <Form.Text className="text-muted">Search Github Users</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Col>
        <Col>
          <Alert
            variant={loading ? "info" : errorMessage ? "danger" : "success"}
          >
            {loading ? "Loading..." : errorMessage ? errorMessage : users.login}
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Test;
