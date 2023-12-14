import React from 'react';
import "./App.css"
import { Link} from "react-router-dom";
import logo from "../src/images/logo.jpeg"
import mainpic from "./images/mainpic.avif"
// import pic1 from "../src/images/login-1536x1536.png"
import b1 from "../src/images/b1.avif"
import b2 from "../src/images/b2.avif"
import b3 from "../src/images/b3.avif"
import b4 from "../src/images/b4.jpg"


const App = () => {

  return (<>
	<header>
		<div className='h1'>
             <img src={logo} alt='logo'></img>
		</div>

		<div className='h3'>
                <form action="">
                 <input  type="text" className="text" placeholder="Search Products"/>
                </form>
        </div>

	    <div className='h2'>
		<li> <Link className='link1' to="/About Us">About Us</Link> </li>
		<li > <Link className='link1' to="/Products">Products</Link> </li>   
		<li> <Link className='link1' >Concept 
		<div className='h4'>
			<ul>	
		<li> <Link className='link2'>Concept Cotton</Link></li>
		<li> <Link className='link2'> Concept Pc</Link></li>
		<li> <Link className='link2'>Concept Poly</Link></li>
		<li>   <Link className='link2'>Concept Yarn</Link> </li> 
		<li>   <Link className='link2'>Concept Cpb</Link> </li>
		</ul>
		</div>
		</Link></li>
		<li > <Link className='link1'>FAQ-Dynamics</Link> </li> 
		<li > <Link className='link1' >Contact Us</Link> </li> 
		
		</div>
	</header>

	<div className='box2'>
		<div className='a1'>
             <p>Let us lead the fashion more sustainable way</p>
			 <div className='a3'>
			 <h4>Explore our concept in textile process</h4>
			 </div>
			 
		</div>
                <div className='a2'>
				<img src={mainpic} alt='pic1'></img>    
				</div>
	</div>

	<div className='box3'>
            <div className='b1'>
			<img src={b1} alt='pic2'></img>  
			<p>Mens Graphic Printed Cotton Hooded Sweatshirt</p>
			</div>
			<div className='b2'>
			<img src={b2} alt='pic3'></img>  
			<p>Polyester  Trim Ruffled Sleeves Top for Women's</p>
			</div>
			<div className='b3'>
			<img src={b3} alt='pic4'></img>  
			<p>Cute Casual Floral Printed Kids</p>
			</div>
			<div className='b4'>
			<img src={b4} alt='pic5'></img>  
			<p>Men's Solid Slim Fit  Casual Shirt </p>
			</div>
	</div>
	
	</>
	
  )
}

export default App













