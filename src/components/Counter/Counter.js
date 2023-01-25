import { useState } from 'react'

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
         setCounter(counter+5);
    }

    const decrement = () => {
        setCounter(counter-3);
   }

  return (
    <div>
        <button onClick={increment}>+</button>
           <p>{counter}</p>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter;
