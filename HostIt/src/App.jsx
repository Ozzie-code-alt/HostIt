import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Btn from "./components/Btn";
import { SERVICES } from "./services";
import Section2 from "./components/Section2";
import Section6 from './components/section6'
import Section7 from "./components/section7";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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
                <p>
                Anything embarrassing hidden in the middle of text. All the
                Lorem <br />
                Ipsuanything embarrassing hidden in the middle of text. All the
                Lorem Ipsumm
                </p>
              </div>
              <Btn />
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
            {SERVICES.map((value) => (
              <Section2 data={value} />
            ))}
          </div>
        </section>

        <section className="section-3-container">
          <div className="s3-main-container">
            <div className="description-container">
              <div className="title-container">
                <h1>About Us</h1>
              </div>

              <div className="details-container">
                <p>
                  Words which don't look even slightly believable. If you are
                  going to use a passage of Lorem Ipsum, you need to be sure
                  there isn't anything embarrassing hidden in the middle of
                  text. All the Lorem Ipsum generators on the Internet tend to
                  repeat predefined chunks
                </p>
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

        <section className="section-4-container">
          <div className="s4-main-container">
            <div className="video-container">
              <video controls width={"700px"}>
                <source src="src/Assets/video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="s4-description-container">
              <div className="title-container">
                <h1>Let us manage your server</h1>
              </div>

              <div className="s4-p-container">
                <p>
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore
                </p>
              </div>

              <div className="s4-btn-container">
                <button> Read More</button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-5-container">
          <div className="s5-main-container">
            <div className="title-container">
              <h1>Our Pricing</h1>
            </div>

            <div className="price-container">
              <div className="first-price-container price">
                <h1>$ 49</h1> <br />
                <span>START UP</span> <br />
                2GB RAM <br />
                20GB SSD Cloud Storage
                <br />
                Weekly Backups
                <br />
                DDoS Protection
                <br />
                Full Root Access
                <br />
                24/7/365 Tech Support

                <button> See Detail </button>
              </div>

              <div className="second-price-container price">
                <h1>$ 99</h1> <br />
                <span>STANDARD</span> <br />
                4GB RAM
                <br />
                50GB SSD Cloud Storage
                <br />
                Weekly Backups
                <br />
                DDoS Protection
                <br />
                Full Root Access
                <br />
                24/7/365 Tech Support
                <button> See Detail </button>
              </div>

              <div className="third-price-container price">
                <h1>$ 149</h1> <br />
                <span>BUSINESS</span> <br />
                8GB RAM <br />100GB SSD Cloud Storage<br /> Weekly Backups <br />DDoS Protection<br />
                Full Root Access<br /> 24/7/365 Tech Support
                <button> See Detail </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-6-container">
          <div className="s6-main-container">
            <div className="testimonial-container">
              <h1>Testimonial</h1>
              <p>Even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to</p>
            </div>
            <div className="client-comments-container">
              <Section6/>
              
            </div>


            <div className="reach-out-container">
                <div className="reach-title-container">
                  <h1>Get in Touch</h1>
                </div>

                <div className="form-container">
                <div className="name-container form">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="Email-container form">
                  <input type="text" placeholder="Your Email"/>
                </div>
                <div className="Phone-container form">
                  <input type="text"  placeholder="Your Phone"/>
                </div>
                <div className="Message-container">
                  <input type="text" placeholder="Message"/>
                </div>
                  <div className="btn-container ">
                    <button> <b>SEND</b></button>
                  </div>
                </div>

              </div>
          </div>
        </section>


<section className="section-7-ccontainer">
    <Section7/>
</section>
      </div>
    </>
  );
}

export default App;
