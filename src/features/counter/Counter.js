import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className="bg-blue-900 p-2 text-white"
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className="bg-blue-900 p-2 text-white"
        >
          Decrement
        </button>
        <button
          aria-label="Increment by 4"
          onClick={() => dispatch(incrementByAmount(4))}
          className="bg-blue-900 p-2 text-white"
        >
          Increment by 4
        </button>
      </div>
    </div>
  );
}
