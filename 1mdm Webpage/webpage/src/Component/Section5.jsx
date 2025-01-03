import image3 from '../Image/1mdm-product-1.png';
import image4 from '../Image/1mdm-product-image-4.png';
import image5 from '../Image/1mdm-product-2.png';
import image6 from '../Image/1mdm-product-3.png';
import Section5_1 from './Section5_1';
import { useState } from 'react';
import Section5_2 from './Section5_2';
import Section5_3 from './Section5_3';
import Section5_4 from './Section5_4';

function Section5(){

  const [comp,setComp] = useState(<Section5_1 />);
  

function handleClick(section){
  switch(section){
    case 1:
      return setComp(<Section5_1 />)
    case 2:
      return setComp(<Section5_2 />)
    case 3:
      return setComp(<Section5_3 />)
    case 4:
      return setComp(<Section5_4 />)
  }
  console.log("hello")
}

    return(
        <div class="section-5">
              <div class="part-7">
                <ul>
                  <li onClick={() => handleClick(1)}>Custom Storefront</li>
                  <li onClick={() => handleClick(2)}>Advertising Tools</li>
                  <li onClick={() => handleClick(3)}>Data and Analytics</li>
                  <li onClick={() => handleClick(4)}>Customer support</li>
                </ul>
                
              </div>
              <div>
                
                {comp}

                {/* <Section5_1 /> */}
              </div>
             
            </div>      
    )
}
export default Section5;