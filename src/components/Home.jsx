import React from 'react';
import logo from "../components/images/title.jpg";
import "./Home.css";
import loc from "../components/images/google-maps.png";

function Home() {
  return (
    <div>
      <div className='container-top'>
        <div className="row pt-3">
          <div className="col-lg-6">
            <div className="header">
              <img src={logo} alt="" />
              <div className="location">
                <img src={loc} alt="" />
                <h6> Mythri Buildings,Arangath Road,Cochin- 18  </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;