import { useEffect, useState } from "react";
function Section1(){

  const [numOne,setNumOne]=useState(0);
 

  useEffect(()=>{
    if(numOne < 26000000 )
      return(setNumOne(numOne + 1000));   
    }
   
  ,[numOne])

    return(
        <>
        <div className="section-1">
      <div class="part-1">
        <p>Sell on 1mdm.com</p>
        <h2>Reach millions of B2B buyers globally</h2>
        <button class="button-1">Start Selling</button>
        <button class="button-2">Chat with consultant</button>
      </div>
      <div class="part-2">
        <h1>Reach millions of B2B buyers globally</h1>
        {numOne.toLocaleString('en-GB')}
      </div>
      
    </div>
      <div class="part-3">
        <p>1mdm.com is a leading ecommerce platform that helps SMEs go global</p>
      </div>
      </>
    )
}

export default Section1;
