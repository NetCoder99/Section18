import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counterStore";
import { sleep } from "../store/sleep";

const Counter = () => {
  const dispatch  = useDispatch()
  const counter   = useSelector((state) => state.counter);
  const showCount = useSelector((state) => state.showCount);
  const [isLoading, setIsLoading] = useState(false);
  
  const buttonClickHandler = async (event) => {
    //console.log("Counter.buttonClickHandler.init");
    setIsLoading(true); await sleep(250);
    //console.log("Counter.buttonClickHandler.id:"     + event.target.id);
    //console.log("Counter.buttonClickHandler.amount:" + event.target.getAttribute('amount'));
    let tmpAmt = parseInt(event.target.getAttribute('amount'));    
    dispatch({type: event.target.id, amount: tmpAmt})
    setIsLoading(false);
    //console.log("Counter.incHandler.end");
  };

  //const incHandler5 = async () => {
  //  console.log("Counter.incHandler");
  //  setIsLoading(true);
  //  await sleep(2500);
  //  dispatch({type: counterActions.increment, amount: 5})
  //  setIsLoading(false);
  //};
  //const decHandler = async () => {
  //  console.log("Counter.decHandler");
  //  dispatch({type: counterActions.decrement})
  //};

  const toggleCounterHandler = () => {
    console.log("Counter.toggleCounterHandler");
    dispatch({type: counterActions.toggleDisplay})
  };

  return (
    <main className={classes.counter}>
      <div className="row1">
        <h1>Redux Counter</h1>
        {showCount && <div className={classes.value}>{counter}</div>}
        {!showCount && <div className={classes.value}>&nbsp;</div>}
      </div>
      <div className="row2">
        <button disabled={isLoading} onClick={buttonClickHandler}  id={counterActions.increment} amount="1">Increment</button>
        <button disabled={isLoading} onClick={buttonClickHandler}  id={counterActions.increment} amount="5">Increment By 5</button>
        <button disabled={isLoading} onClick={buttonClickHandler}  id={counterActions.decrement} amount="1">Decrement</button>
      </div>
      <div>
        <button disabled={true}></button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
    </main>
  );
};

export default Counter;
