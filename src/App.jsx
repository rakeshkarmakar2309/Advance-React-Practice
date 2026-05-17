import { useState, useReducer } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  function reducerFn(state,action){
    switch(action.type){
      case "INCREMENT":
        return {count: state.count + 1};
      case "DECREMENT":
        return {count: state.count - 1};
      default:
        return state;
    }
  }

  const handleIncrement = () => {
    // setCount((count) => count + 1);
    dispatch({type: "INCREMENT"});
  }

  const handleDecrement = () => {
    // setCount((count) => count - 1);
    dispatch({type: "DECREMENT"});
  }

  const [state,dispatch] = useReducer(reducerFn, {count:0});

  return (
    <>
      <section id="center">
        Count is {state.count}
        <div className="flex">
          <button
            type="button"
            className="counter"
            style={{ gap: "1rem", marginRight: "1rem" }}
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            type="button"
            className="counter"
            onClick={handleDecrement}
          >
            Decrement
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
