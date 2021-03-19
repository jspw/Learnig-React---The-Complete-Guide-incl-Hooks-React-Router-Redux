import React, { useState } from "react";
import { connect } from "react-redux";
import { decrementAction, incrementAction } from "../../services/redux/actions";

const Counter = (props) => {
  // const [count, setCount] = useState(props.count);
  const count = props.count;

  const style = {
    padding: "5px",
    margin: "5px",
    color: "white",
    backgroundColor: "green",
    fontSize: "20px",
    borderRadius: "30px",
  };

  const handleIncrement = () => {
    props.increment();
  };

  const handleDecrement = () => {
    props.decrement();
  };

  return (
    <div>
      <p>
        <b>Count</b> : {count}
      </p>
      <button onClick={handleIncrement} style={style}>
        increment
      </button>
      <button onClick={handleDecrement} style={style}>
        decrement
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { count: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
