import { useState } from "react";
import { decrementNumber, incrementNumber } from "./Action";
import reducer from "./Reducer";
import { createStore } from 'redux';

const store = createStore(reducer);

export default function LikeCounter() {
  const [count, setCount] = useState(0);

  store.subscribe(() => {
    setCount(store.getState().count);
  });

  return (
    <div className="parent">
      <h1 id="heading">Counter</h1>
      <h2 id="count ">{count}</h2>
      <div className="buttondiv">
        <button onClick={() => store.dispatch(incrementNumber())} id="incre">Like</button>
        <button onClick={() => store.dispatch(decrementNumber())} id="decre">Unlike</button></div>
      </div>
  );
}