import image3 from '../Image/1mdm-product-1.png';
import image4 from '../Image/1mdm-product-image-4.png';
import image5 from '../Image/1mdm-product-2.png';
import image6 from '../Image/1mdm-product-3.png';
import { Section5_1 } from './Section5_1';
import { useState } from 'react';

function Section5(){

  const [comp,setComp] = useState(<Section5_1 />);
  

function handleClick(section){
  switch(section){
    case 1:
      return setComp(<Section5_1 />)
    case 2:
  }
  console.log("hello")
}

    return(
        <div class="section-5">
              <div class="part-7">
                <ul>
                  <li onClick={() => handleClick(1)}>Custom Storefront</li>
                  <li>Advertising Tools</li>
                  <li>Data and Analytics</li>
                  <li>Customer support</li>
                </ul>
                
              </div>
              <div>
                
                {comp}

                {/* <Section5_1 /> */}
              </div>
              {/* <div class="part-8">
                <h1>Set up a store that showcases your brand</h1>
                <p>Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!</p>
              </div>
              <div class="part-9">
                <img src={image3} />
              </div>
              <div class="part-10">
              <h1>Increase exposure by up to 120% with a suite of smart advertising tools</h1>
              <p>Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!</p>
              </div>
              <div class="part-11">
                <img src={image4} />
              </div>
              <div class="part-12">
              <h1>Optimize your every move with in-depth data and customer insights</h1>
              <p>Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!</p>
              </div>
              <div class="part-13">
                <img src={image5} />
              </div>
              <div class="part-14">
              <h1>Know you’re supported throughout your journey</h1>
              <p>Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!</p>
              </div>
              <div class="part-15">
                <img src={image6} />
              </div> */}
            </div>      
    )
}
export default Section5;