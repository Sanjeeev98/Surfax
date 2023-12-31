import React from "react";
import "./aboutus2.css";
import d2 from "../src/images/d2.jpg"
import d1 from "../src/images/d1.png"
import 'bootstrap/dist/css/bootstrap.min.css';

function Aboutus(){
return(<>
                      

                      <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-4 backcolor">
                                 <div class="container mt-2">
                                    <img class="img-fluid rounded-circle" src={d2} alt="New York" style={{width:"350px",height:"250px"}}/> 

                                    <h3 class="head3 mt-3">About US..</h3>
                 
                    <p class="para">Making clients more sustainable in textile processing with advanced specialty chemicals imported from ERCA, Italy.</p>
                    
                    <p class="para">Our technicians find ways to lead the market with innovative process routes for sustainable and economical processing.</p>
                   
                    <p class="para">We provide end-to-end solutions for energy efficient and quality processing techniques with ERCA’s world class products.</p>
                <br/>
                    <h3 class="head3">Advantages</h3>
              
                    <ul class="list">
                        <li>Energy efficient.</li>
                        <li>Minimized weight loss.</li>
                        <li>Reduces effluent load.</li>
                        <li>Improved hand feel.</li>
                        <li>Less effect on DP.</li>
                        <li>Biodegradable.</li>
                    </ul>
                    <br/>
                    <h3 class="head3">Contact</h3>
                    <br/>
                    <p class="para">PHONE :</p>
                    <li class="list">+91 93444 53519</li>
                    <li class="list">+91 98422 10260</li>
                    <br/>
                    <p class="para">WEBSITE :</p>
                    <li class="list">www.surfaux.com</li>
                    <br/>
                    <p class="para">EMAIL :</p>
                    <li class="list">surfauxdyechem@gmail.com</li>
                                 </div>
                            </div>
                            <div class="col-lg-8 ">
                                      <div class="container d-flex justify-content-center p-3">
                                        <img class="img-fluid mt-4" src={d1} alt="New York" style={{width:"550px",height:"190px"}} /> 
                                      </div>
                                      <div class="container line">
                                    <h3 class="head3 mt-4">ABOUT ERCA</h3>
                                    <hr/>
                                  
                                    <p class="para2">
                                        ERCA TCS is a company with a complete focus on chemistry for textiles, is part of ERCA SPA, an innovation-driven chemical group with manufacturing plants in Europe, Latin America and Asia with a responsible innovation DNA. <br/>
                                    <br/>
                                    ERCA SPA focuses on the development and manufacturing of chemical specialties and chemical intermediates. Thanks to its vision that leads to continuous investment in people, research and development, the Italian company brings forward a quite unique circular, ethical and responsible innovation in the so-called Green Chemistry. Indeed, its products are applicable to a wide range of textiles proving to be the missing element to achieve sustainability at 360°. ERCA provides eco-friendly ground-breaking solutions that respect the environment, grant a safe production process and look after consumer health and comfort.
                                    </p>
                                      </div>
                            </div>

                        </div>


                        
                     </div>

























     
     {/* <div className="box4">
        <div className="san1">
              <div className="d1">
              <img src={d2} alt="img"></img> 
              </div>
              <div className="d2">
                    <h3>About US..</h3>
                    <br/>
                    <p>Making clients more sustainable in textile processing with advanced specialty chemicals imported from ERCA, Italy.</p>
                    <br/>
                    
                    <p>Our technicians find ways to lead the market with innovative process routes for sustainable and economical processing.</p>
                    <br/>
                    <p>We provide end-to-end solutions for energy efficient and quality processing techniques with ERCA’s world class products.</p>
                    <br/>
                    <h3>Advantages</h3>
                    <br/>
                    <ul>
                        <li>Energy efficient.</li>
                        <li>Minimized weight loss.</li>
                        <li>Reduces effluent load.</li>
                        <li>Improved hand feel.</li>
                        <li>Less effect on DP.</li>
                        <li>Biodegradable.</li>
                    </ul>
                    <br/>
                    <h3>Contact</h3>
                    <br/>
                    <p>PHONE :</p>
                    <li>+91 93444 53519</li>
                    <li>+91 98422 10260</li>
                    <br/>
                    <p>WEBSITE :</p>
                    <li>www.surfaux.com</li>
                    <br/>
                    <p>EMAIL :</p>
                    <li>surfauxdyechem@gmail.com</li>
              </div>
        </div>


        <div className="san2">
                <div className="d3">
                <img src={d1} alt="img"></img>
                </div>
                <div className="d4">
                  <h3>ABOUT ERCA</h3>
                  <hr/>
                  <br/>
                  <p>
                    ERCA TCS is a company with a complete focus on chemistry for textiles, is part of ERCA SPA, an innovation-driven chemical group with manufacturing plants in Europe, Latin America and Asia with a responsible innovation DNA. <br/>
                    <br/>
        ERCA SPA focuses on the development and manufacturing of chemical specialties and chemical intermediates. Thanks to its vision that leads to continuous investment in people, research and development, the Italian company brings forward a quite unique circular, ethical and responsible innovation in the so-called Green Chemistry. Indeed, its products are applicable to a wide range of textiles proving to be the missing element to achieve sustainability at 360°. ERCA provides eco-friendly ground-breaking solutions that respect the environment, grant a safe production process and look after consumer health and comfort.

                  </p>
                </div>
        </div>

     </div> */}

</>)
}
export{Aboutus};