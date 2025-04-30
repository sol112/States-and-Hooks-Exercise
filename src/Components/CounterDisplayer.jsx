import React from 'react'
import allClicksCounter from './MyCounter'

function CounterDisplayer() {

    const { myVariable, setMyVariable } = allClicksCounter();

    const updateVariable = () => {
     setMyVariable(prevState => {
        return prevState+20;
        // you can also set prevState=10 using below code
        // return prevState=10;
     })
    };


  return (
    <div>
        <h1>Number of Counts:{myVariable} </h1>
        <button onClick={updateVariable}>Click me! I am apssing a state value to a function: 'allClicksCounter' in another Component</button>
    </div>
  )
}

export default CounterDisplayer