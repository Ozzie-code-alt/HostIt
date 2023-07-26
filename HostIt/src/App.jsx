import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
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

              <div className="btn-container">
                <button>Read More</button>
                <button>Contact Us</button>
              </div>
            </div>

            <div className="img-container">
              <img src="src/Assets/Untitled design.png" alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
