import logo from "../logo.svg";
import "./App.css";

import Home from "../components/Home/Home";
import NavBar from "../components/NavBar/NavBar";

import allReducers from "../redux/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const App = () => {
  const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  console.log(store);

  return (
    <Provider store={store}>
      <NavBar />
      <Home />
    </Provider>
  );
};

export default App;
