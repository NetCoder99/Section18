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
    setIsLoading(true); //await sleep(150);
    let tmpAmt = parseInt(event.target.getAttribute('amount'));    
    dispatch({type: event.target.id, amount: tmpAmt})
    setIsLoading(false);
  };

  return (
    <main className={`${classes.counter} ${classes.wrapper}`}>
      <div className={classes.item1}>
        <h1>Redux Counter</h1>
        {showCount && <div className={classes.value}>{counter}</div>}
        {!showCount && <div className={classes.value}>&nbsp;</div>}
      </div>

      <div className={classes.item3}>
        <button 
          disabled={isLoading} 
          onClick={buttonClickHandler}  
          id={counterActions.increment} 
          amount="1">Increment</button>
      </div>
      <div className={classes.item4}><button disabled={isLoading} onClick={buttonClickHandler}  id={counterActions.increment} amount="5">Increment By 5</button></div>
      <div className={classes.item5}><button disabled={isLoading} onClick={buttonClickHandler}  id={counterActions.decrement} amount="1">Decrement</button></div>

      <div className={classes.item6}></div>
      <div className={classes.item7}><button onClick={buttonClickHandler} id={counterActions.toggleDisplay} >Toggle Counter</button></div>
      <div className={classes.item8}><button onClick={buttonClickHandler} id={counterActions.reset} >Reset Counter</button></div>
    </main>
  );
};

export default Counter;
