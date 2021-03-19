import "./App.css";
import Header from "../components/header/Header";
import Counter from "../components/body/Counter";
import { Provider } from "react-redux";
import { createStore } from "redux";

import countReducer from "../services/redux/reducers";

function App() {
  const store = createStore(countReducer);

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
