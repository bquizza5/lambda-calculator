import React from "react";

//import any components needed
import { useState } from 'react';
import { SpecialButton } from "./SpecialButton"

//Import your array data to from the provided data file
import { specials } from "../../../data"

export const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setspecialState] = useState(specials);

  return (
    <div className="SpecialButtons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       specials.map(function(special) {
        console.log(special)
        return <SpecialButton spe={special} />
        
     })
       
       }
    </div>
  );
};
