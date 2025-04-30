
import { useState } from 'react'


function IncreaseDecreaseCount() {

let [count, setCount] = useState(0);

        const increment = () => {
            setCount(prevState => {
            return prevState + 1;
            }); // use the updater function
        };

        const decrement = () => {
            setCount(prevState => {
            return prevState -1;
            }); // use the updater function
        };

        const reset = () => {
            setCount(prevState => {
            return prevState=0;
            }); // use the updater function
        };



  return (

    <div className='all-container'>
        <div>
        <h1>Initial click Count:{count}</h1> 
        </div> 
        <br/> <br/>
        <div className='button-container'>
            
            <div><button onClick={increment}>increment +1</button></div>
            <div><button onClick={decrement}>decrement -1</button></div>
            <div><button onClick={reset}>reset</button></div>
        </div>
    </div>
    
  )
}

export default IncreaseDecreaseCount