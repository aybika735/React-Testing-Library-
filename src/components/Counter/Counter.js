import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "../../store/reducers/selectors/getCounterValue/getCounterValue";
import { increment, decrement } from "../../store/reducers/counterReducer";

const Counter = () => {
  

  const value = useSelector(getCounterValue);
  const dispatch = useDispatch();
  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1 data-testid='value-title'>{value}</h1>
      <button data-testid ='increment-btn' onClick={onIncrement}>minus</button>
      <button data-testid ='decrement-btn'onClick={onDecrement}>plus</button>
    </div>
  );
};

export default Counter;
