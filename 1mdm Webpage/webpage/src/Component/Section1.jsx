import CountUp from "react-countup";

function Section1(){
    return(
        <>
        <div className="section-1">
      <div class="part-1  ">
        <p>Sell on 1mdm.com</p>
        <strong>Reach millions of B2B buyers globally</strong>
        <br /><br /><br />
        <button class="button-1">Start Selling</button>
        <button class="button-2">Chat with consultant</button>
      </div>
      <div class="part-2 ">
        <CountUp 
          end={26000000}
          duration={5}
        />
        <p>Active Buyers Globally</p>
        <br />
        <CountUp
          end={400000}
          duration={5}
        />
        <p>Product Inquries Daily</p>

        <br />
        <CountUp 
          end={200}
          duration={5}
         /> 
        <p>Countries and regions represented</p>
      </div>
      
    </div>
      <div class="part-3">
        <p>1mdm.com is a leading ecommerce platform that helps SMEs go global</p>
      </div>
      </>
    )
}

export default Section1;
