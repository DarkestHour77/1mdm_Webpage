import CountUp from "react-countup";

function Section1(){
    return(
        <>
        <div className="section-1">
      <div class="part-1">
        <p>Sell on 1mdm.com</p>
        <h2>Reach millions of B2B buyers globally</h2>
        <button class="button-1">Start Selling</button>
        <button class="button-2">Chat with consultant</button>
      </div>
      <div class="part-2 text-xl">
        <h1>Reach millions of B2B buyers globally</h1>
        <CountUp 
          end={26000000}
          duration={5}
        />
        <br />
        <CountUp
          end={400000}
          duration={5}
        />

        <br />
        <CountUp 
          end={200}
          duration={5}
         /> 
      </div>
      
    </div>
      <div class="part-3">
        <p>1mdm.com is a leading ecommerce platform that helps SMEs go global</p>
      </div>
      </>
    )
}

export default Section1;
