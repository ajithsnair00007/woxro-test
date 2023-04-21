import React from "react";
import "./middle.css";

function Middle() {
  return (
    <div id="cardmain">
      <div style={{textAlign:'center'}} className="cardtext">
        <p className="service">SERVICES WE DELIVER</p>
        <h2>
          Preparing for our success, we provide truly
          <br /> prominent IT solutions.
        </h2>
      </div>

      <div style={{ padding: "0.5rem" }} className="row">
        <div style={{ padding: "0.5rem" }} className="col-md-4 ">
          <div style={{ cursor: "pointer" }} id="card1" className="card">
          
            <div  className="card-body">
            <img    
          
                  src="https://woxro.com/public/assets/png/services/webdesigning.png"
                  alt=""
                />
              <div>
                
              </div>
              <div>
                <h3 className="card-title">Web Designing</h3>
              </div>
              <div>
                <p className="card-text">
                  We create impressive interfaces. Usability + user experience
                  are created based on a study of preferences and user behavior,
                  using the latest web design trends, our experience, and
                  acheivements
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: "0.5rem" }} className="col-md-4 ">
          <div style={{ cursor: "pointer" }} id="card2" className="card">
          
            <div  className="card-body">
            <img  
                  src="https://woxro.com/public/assets/png/services/webapplication.png"
                  alt=""
                />
              <div>
               
              </div>
              <h3 className="card-text">Web Application</h3>
              <p>
                We have completed projects in full-cycle web applications
                including CRM, HRM, and project management solutions. Look no
                further if you are in search of a professional partner who can
                develop stunning web applications.
              </p>
            </div>
          </div>
        </div>

        <div style={{ padding: "0.5rem" }} className="col-md-4 ">
          <div style={{ cursor: "pointer" }} id="card3" className="card">
          
            <div  className="card-body">
            <img 
                src="https://woxro.com/public/assets/png/services/mobileappdevelopment.png"
                alt=""
                />
              <h3 className="card-text">Mobile App Developement</h3>
              <p>
                We develop high-quality and effective applications for your
                business. Our expertise and knowledge help us create reliable
                mobile applications for iOS and Android and cross-platform
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "0.5rem" }} className="row">
        <div style={{ padding: "0.5rem" }} className="col-md-4 ">
          <div style={{ cursor: "pointer" }} id="card4" className="card">
          
            <div  className="card-body">
            <img  
                
                src="https://woxro.com/public/assets/png/services/ecommercedevelopment.png"
                alt=""
              />
             
              <h3 className="card-text">Ecommerce Developement</h3>
              <p>
                For some of you, our involvement as an eCommerce development and
                consulting partner will mean a powerful business launch with the
                right technology stack. For others - a possibility to give their
                business a fresh start.
              </p>
            </div>
          </div>
        </div>

        <div style={{ padding: "0.5rem" }} className="col-md-4 ">
          <div style={{ cursor: "pointer" }}  id="card5" className="card">
          
            <div  className="card-body">
              <img
                
                src="https://woxro.com/public/assets/png/services/digitalmarketing.png"
                alt=""
              />
              <h3 className="card-text">Digital Marketing</h3>
              <p>
                We bring together expertise in brand marketing and
                sustainability to design and implement ideas in branding. We
                also bring brand purpose to life by communicating great stories.
                Now Maximize your online visibility.
              </p>
            </div>
          </div>
        </div>

        <div style={{ padding: "0.5rem" }} className="col-md-4 ">
          <div style={{ cursor: "pointer" }}  id="card6" className="card">
          
            <div  className="card-body">
            <img
               
                src="https://woxro.com/public/assets/png/services/graphic.png"
                alt=""
              />
              
              <h3 className="card-text">Graphic Designing</h3>
              <p>
                We build sustainable, brands by connecting your product and
                message with audiences that would want to get your and or
                services. We nurture ideas to transform ands through creativity
                focussed on growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
