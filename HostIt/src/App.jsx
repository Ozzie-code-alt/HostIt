import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Btn from './components/Btn'
import { SERVICES } from "./services";
import Section2 from './components/Section2'
function App() {
  return (
    <>
      <div className="main-container">
        <section className="section-1-container">
          <Navbar />
          <div className="section-1-content-container">
            <div className="sec-1-description-container">
              <div className="h1-container">
                <h1>
                  Fast & Secure <br /> Web Hosting
                </h1>
              </div>
              <div className="p-container">
                Anything embarrassing hidden in the middle of text. All the
                Lorem <br />
                Ipsuanything embarrassing hidden in the middle of text. All the
                Lorem Ipsumm
              </div>
            <Btn/>
            </div>

            <div className="img-container">
              <img src="src/Assets/Untitled design.png" alt="" />
            </div>
          </div>
        </section>

        <section className="section-2-container">
        <div className="title-container">
          <h1>Our Services</h1>
        </div>
       <div className="services-container">
        {SERVICES.map((value) => <Section2 data={value}/>)}
       </div>
        </section>

        <section className="section-3-container">
          <div className="s3-main-container">
            <div className="description-container">
              <div className="title-container">
                <h1>
                  About Us
                </h1>
              </div>

              <div className="details-container">
                <p>Words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks</p>
              </div>

              <div className="btn-container">
              <button> Read More</button>
              </div>
            </div>

            <div className="img-container">
              <img src="src/Assets/gif.gif" alt="" />
            </div>
          </div>
        </section>
      </div>
    </> 
  );
}

export default App;
