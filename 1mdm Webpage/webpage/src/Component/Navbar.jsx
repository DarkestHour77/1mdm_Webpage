import image1 from '../Image/1mdm-168x58.png';
function Navbar(){
    return(
        <>
            <nav>
            <div class="left"><img src={image1}></img></div>
            <div class="right">
                {/* <a href="#about_us"> About us </a>
                <a href="#our_story"> Our  Story </a>
                <a href="#sell_on_1mdm"> Sell On 1MDM </a>
                <a href="#pricing"> Pricing </a> */}
                <ul>
                <li><a href="/about_us">About us</a></li>
                <li><a href="/our_story">Our Story</a></li>
                <li><a href="/sell_on_1mdm">Sell On 1MDM</a></li>
                <li><a href="/pricing">Pricing</a></li>
                </ul>
            </div>
            </nav>
            <br></br>
     </>
    )
}
export default Navbar;