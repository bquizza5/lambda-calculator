import React from "react";

//import any components needed
import { useState } from 'react';
import { NumberButton } from "./NumberButton";

//Import your array data to from the provided data file
import { numbers } from "../../../data";


export const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div className="numberButtons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       numbers.map(function(number) {
          console.log(number)
          return <NumberButton num={number} />
          
       })
       
       }
    </div>
  );
};
