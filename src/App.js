import React from 'react';
import "./App2.css"
import { Link} from "react-router-dom";
import logo from "../src/images/logo.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import mainpic from "./images/mainpic.avif"
// import pic1 from "../src/images/login-1536x1536.png"
import b1 from "../src/images/b1.avif"
import b2 from "../src/images/b2.avif"
import b3 from "../src/images/b3.avif"
import b4 from "../src/images/b4.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (<>
                       

						<div class="container-fluid bg-dark  san" style={{minHeight:"75px"}}>
                  
                  <div class='row'>

                    <div class="col-sm-6 col-md-6 col-lg-3 mt-4 ">
                     <img class="img-fluid  " src={logo} alt=""/>

                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 mt-3 ">
                        <form>
                          <div class="input-group    input-group-sm">   
                            <input type="text" class="form-control" style={{fontSize:"20px"}} placeholder="Search Products"/>
                            <span class="input-group-text">
							<button class="btn btn-sm" type="button">
							<FontAwesomeIcon icon={faMagnifyingGlass} />
							</button>
							</span>
                          </div>
                           </form>                        

                    </div>

                    <div class="col-sm-12  col-md-12  col-lg-6 mt-1 bg-dark sanlist h2 ">
                  <ul class="d-flex justify-content-between mt-2">
                <li ><Link className='linkitem'  to="/About Us"> About Us </Link></li>
                <li  ><Link className='linkitem' to="/Products">Products </Link></li>
                <li ><Link className='linkitem'>Concept 
				<div className='h4'>
			<ul style={{listStyle:'none',lineHeight:"32px"}}>	
		<li> <Link className='linkitem'>Concept Cotton</Link></li>
		<li> <Link className='linkitem'> Concept Pc</Link></li>
		<li> <Link className='linkitem'>Concept Poly</Link></li>
		<li>   <Link className='linkitem'>Concept Yarn</Link> </li> 
		<li>   <Link className='linkitem'>Concept Cpb</Link> </li>
		</ul>
		</div>
				</Link></li>

                <li ><Link className='linkitem'>FAQ-Dynamics</Link></li>
                <li  ><Link className='linkitem'>Contact Us </Link></li>
              </ul>
                    
                    </div>                
                    </div>
                  </div>

                  {/* <div class="container-fulid san3 bg1">
                             <div class="row">
                               <div class="col-sm-6 bg1">
                                     <h1 class="display-5 bg1">Let us lead the fashion more sustainable way</h1>
                                     <h4 class=" bgyellow text-dark p-1" style={{width:"415px"}} > Explore our concept in textile process </h4>
                              </div>
                              <div class="col-sm-6 bg1">
                              
                                     <img class="img-fluid rounded mt-3 mb-3" src={mainpic} alt="img"/>
                              </div>
                             </div>     
                  </div> */}

<div class="container-fluid san3 bg1">
    <div class="row">
        <div class="col-sm-6 d-flex flex-column align-items-center justify-content-center bg1">
            <h1 class="display-5 bg1 text-center">Let us lead the fashion in a more sustainable way</h1>
            <h4 class="bgyellow text-dark p-1"style={{width:"450px",textAlign:"center"}}>Explore our concept in the textile process</h4>
        </div>
        <div class="col-sm-6 bg1">
            <img class="img-fluid rounded mt-3 mb-3" src={mainpic} alt="img"/>
        </div>
    </div>
</div>


                  <div class="container-fluid san4">
                    <div class="row">
                      <div class="col-sm-3 mt-2" >
                        <img class="img-fluid rounded " style={{minHeight:"210px"}} src={b1} alt="img"/>
                        <p class="text-center mt-1">Mens Graphic Printed Cotton Hooded Sweatshirt</p>
                       </div>
                       <div class="col-sm-3 mt-2">
                        <img class="img-fluid rounded " src={b2}  alt="img"/>
                        <p class="text-center mt-1">Polyester  Trim Ruffled Sleeves Top for Women's</p>
                       </div>
                       <div class="col-sm-3 mt-2">
                        <img class="img-fluid rounded" src={b3} alt="img"/>
                        <p class="text-center mt-1">Cute Casual Floral Printed Kids</p>
                       </div>
                       <div class="col-sm-3 mt-2">
                        <img class="img-fluid rounded" src={b4}  alt="img"/>
                        <p class="text-center mt-1">Men's Solid Slim Fit  Casual Shirt</p>
                       </div>
                      </div>
                    </div>


                    
					

	</>
	
  )
}

export default App













