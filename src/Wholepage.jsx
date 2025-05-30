import React from "react";
import { TiMessages } from "react-icons/ti";
import aboutusimg from "./assets/aboutusimg.png";
import g_img_1 from "./assets/Gallary_images/g_img_1.png";
import g_img_2 from "./assets/Gallary_images/g_img_2.png";
import g_img_3 from "./assets/Gallary_images/g_img_3.png";
import g_img_4 from "./assets/Gallary_images/g_img_4.png";
import g_img_5 from "./assets/Gallary_images/g_img_5.png";
import g_img_6 from "./assets/Gallary_images/g_img_6.png";
import g_img_7 from "./assets/Gallary_images/g_img_7.png";
import g_img_8 from "./assets/Gallary_images/g_img_8.png";
import g_img_9 from "./assets/Gallary_images/g_img_9.png";
import re_wr_1 from "./assets/Review_writers_images/re_wr_1.png";
import Director_img from "./assets/Team_members_img/Director_img.png";
import Project_Manager_img from "./assets/Team_members_img/Project_Manager_img.png";
import Senior_Designer_1_img from "./assets/Team_members_img/Senior_Designer_1_img.png";
import Senior_Designer_2_img from "./assets/Team_members_img/Senior_Designer_2_img.png";

const Wholepage = () => {
  return (
    <>
      <div className="container-fluid text-center d-flex flex-column flex-wrap justify-content-center align-items-center vh-100 intro-bg mt-5">
        <div className="introdata">
          <h1 className="display-1">
            <b>WE ARE A LANDING PAGE</b>
          </h1>

          <p>
            Landing Page Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante
            facilisis bibendum.
          </p>
          <button className="intro-Button">Learn More</button>
        </div>
      </div>

      {/* Features */}

      <div
        className="container d-flex flex-column justify-content-start align-items-center vh-50 mt-3 p-3"
        id="features"
      >
        <h1>FEATURES</h1>
        <div className="feature-items d-flex flex-wrap justify-content-center align-items-center">
          <div className=" box-feature d-flex justify-content-center align-items-center box-shadow">
            <div className="icons d-flex justify-content-center align-items-center  ">
              <TiMessages className="display-4" />
            </div>

            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
              eleifend pellentesque natoque etiam.
            </p>
          </div>

          <div className=" box-feature d-flex justify-content-center align-items-center box-shadow">
            <div className="icons d-flex justify-content-center align-items-center  ">
              <TiMessages className="display-4" />
            </div>

            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
              eleifend pellentesque natoque etiam.
            </p>
          </div>

          <div className=" box-feature d-flex justify-content-center align-items-center box-shadow">
            <div className="icons d-flex justify-content-center align-items-center  ">
              <TiMessages className="display-4" />
            </div>

            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
              eleifend pellentesque natoque etiam.
            </p>
          </div>

          <div className=" box-feature d-flex justify-content-center align-items-center box-shadow">
            <div className="icons d-flex justify-content-center align-items-center  ">
              <TiMessages className="display-4" />
            </div>

            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
              eleifend pellentesque natoque etiam.
            </p>
          </div>
        </div>
      </div>

      {/* About us */}

      <div
        className="container d-flex flex-column flex-wrap justify-content-start align-items-center vh-50 mt-3 p-3"
        id="about"
      >
        <div className="row About-us">
          <div className="col-sm-12 col-md-12 col-lg-6 ">
            <img src={aboutusimg} alt="About us" className="img-fluid" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <h3>Why Choose Us?</h3>
            <div className="aboutdata-container d-flex flex-row flex-wrap justify-content-between">
              <div className="aboutdata m-2">
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Tempor incididunt</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Incididunt ut labore</li>
                </ul>
              </div>

              <div className="aboutdata m-2">
                <ul>
                  <li>Aliquip ex ea commodo</li>
                  <li> Lorem ipsum dolor</li>
                  <li> Exercitation ullamco</li>
                  <li>Lorem ipsum dolor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}

      <div
        className="ourservices d-flex flex-column justify-content-center align-items-center mt-5 p-5 mb-5"
        id="services"
      >
        <div className="container">
          <h1 className="text-center mt-3">OUR SERVICES</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
          <div className="services-options d-flex flex-wrap justify-content-around align-items-center gap-5 p-3">
            <div className=" box-feature d-flex justify-content-center align-items-center box-shadow">
              <div className="icons d-flex justify-content-center align-items-center  ">
                <TiMessages className="display-4" />
              </div>

              <h4>Lorem ipsum</h4>
              <p>
                Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
                eleifend pellentesque natoque etiam.
              </p>
            </div>
            <div className=" box-feature d-flex justify-content-center align-items-center box-shadow">
              <div className="icons d-flex justify-content-center align-items-center  ">
                <TiMessages className="display-4" />
              </div>

              <h4>Lorem ipsum</h4>
              <p>
                Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
                eleifend pellentesque natoque etiam.
              </p>
            </div>

            <div className=" box-feature d-flex justify-content-center align-items-center box-shadow">
              <div className="icons d-flex justify-content-center align-items-center  ">
                <TiMessages className="display-4" />
              </div>

              <h4>Lorem ipsum</h4>
              <p>
                Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
                eleifend pellentesque natoque etiam.
              </p>
            </div>

            <div className=" box-feature d-flex justify-content-center align-items-center box-shadow">
              <div className="icons d-flex justify-content-center align-items-center  ">
                <TiMessages className="display-4" />
              </div>

              <h4>Lorem ipsum</h4>
              <p>
                Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
                eleifend pellentesque natoque etiam.
              </p>
            </div>

            <div className=" box-feature d-flex justify-content-center align-items-center box-shadow">
              <div className="icons d-flex justify-content-center align-items-center  ">
                <TiMessages className="display-4" />
              </div>

              <h4>Lorem ipsum</h4>
              <p>
                Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
                eleifend pellentesque natoque etiam.
              </p>
            </div>

            <div className=" box-feature d-flex justify-content-center align-items-center box-shadow">
              <div className="icons d-flex justify-content-center align-items-center  ">
                <TiMessages className="display-4" />
              </div>

              <h4>Lorem ipsum</h4>
              <p>
                Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
                eleifend pellentesque natoque etiam.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}

      <div className="gallary container mt-5" id="gallery">
        <h1 className="text-center mt-5">GALLERY</h1>
        <p className="text-center m-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </p>

        <div className="gallary_images d-flex flex-wrap justify-content-center align-items-center">
          <img src={g_img_1} alt="image-1" />
          <img src={g_img_2} alt="image-2" />
          <img src={g_img_3} alt="image-3" />
          <img src={g_img_4} alt="image-4" />
          <img src={g_img_5} alt="image-5" />
          <img src={g_img_6} alt="image-6" />
          <img src={g_img_7} alt="image-7" />
          <img src={g_img_8} alt="image-8" />
          <img src={g_img_9} alt="image-9" />
        </div>
      </div>

      {/* Testimonials */}

      <div
        className="testimonials d-flex flex-column justify-content-center align-items-center mt-5 p-5 mb-5"
        id="testimonials"
      >
        <h1>What our clients say</h1>
        <div className="clientReview container row  d-flex flex-row justify-content-start align-items-start mt-5 p-5">
          {/* client - 1 */}
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex gap-4 justify-content-center align-items-start">
            <img src={re_wr_1} alt="" className="rounded-circle" />
            <div className="cliend_Review_data">
              <p>
                <q>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at.
                </q>
              </p>
              <p>
                <b>- John Doe</b>
              </p>
            </div>
          </div>

          {/* client - 2 */}
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex gap-4 justify-content-center align-items-start">
            <img src={re_wr_1} alt="" className="rounded-circle" />
            <div className="cliend_Review_data">
              <p>
                <q>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at.
                </q>
              </p>
              <p>
                <b>- Johnathan Doe</b>
              </p>
            </div>
          </div>

          {/* client - 3 */}

          <div className="col-sm-12 col-md-6 col-lg-4 d-flex gap-4 justify-content-center align-items-start">
            <img src={re_wr_1} alt="" className="rounded-circle" />
            <div className="cliend_Review_data">
              <p>
                <q>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at.
                </q>
              </p>
              <p>
                <b>- John Doe</b>
              </p>
            </div>
          </div>

          {/* client - 4 */}
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex gap-4 justify-content-center align-items-start">
            <img src={re_wr_1} alt="" className="rounded-circle" />
            <div className="cliend_Review_data">
              <p>
                <q>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at.
                </q>
              </p>
              <p>
                <b>- Johnathan Doe</b>
              </p>
            </div>
          </div>

          {/* client -5 */}

          <div className="col-sm-12 col-md-6 col-lg-4 d-flex gap-4 justify-content-center align-items-start">
            <img src={re_wr_1} alt="" className="rounded-circle" />
            <div className="cliend_Review_data">
              <p>
                <q>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at.
                </q>
              </p>
              <p>
                <b>- Ayyapparayudu</b>
              </p>
            </div>
          </div>

          {/* client - 6 */}
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex gap-4 justify-content-center align-items-start">
            <img src={re_wr_1} alt="" className="rounded-circle" />
            <div className="cliend_Review_data">
              <p>
                <q>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at.
                </q>
              </p>
              <p>
                <b>- Shiva</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}

      <div className="container Team mt-5 mb-5" id="team">
        <h1 className="text-center">MEET THE TEAM</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </p>

        <div className="team_members d-flex flex-wrap justify-content-center align-items-start mt-5 p-5 gap-5">
          {/* Member 1 */}
          <div className="member d-flex flex-column justify-content-center align-items-center">
            <img src={Director_img} alt="" className="mb-2" />
            <h4>John Doe</h4>
            <p>Director</p>
          </div>

          {/* Member 2 */}
          <div className="member d-flex flex-column justify-content-center align-items-center">
            <img src={Senior_Designer_1_img} alt="" className="mb-2" />
            <h4>Mike Doe</h4>
            <p>Senior Designer</p>
          </div>

          {/* Member 3 */}
          <div className="member d-flex flex-column justify-content-center align-items-center">
            <img src={Senior_Designer_2_img} alt="" className="mb-2" />
            <h4>Jane Doe</h4>
            <p>Senior Designer</p>
          </div>

          {/* Member 4 */}

          <div className="member d-flex flex-column justify-content-center align-items-center">
            <img src={Project_Manager_img} alt="" className="mb-2" />
            <h4>Karen Doe</h4>
            <p>Project Manager</p>
          </div>
        </div>
      </div>

      {/* Contact  */}

      <div className="contact vh-100 p-5" id="contact">
        <div className="row container d-flex flex-row justify-content-center align-items-center mt-5 p-5">
          <h1 className="">GET IN TOUCH</h1>
          <div className="form col-sm-12 col-md-12 col-lg-9 gap-2 mb-3">
            <p className="">
              Please fill out the form below to send us an email and we will get
              back to you as soon as possible.
            </p>
            <form
              action=""
              className="d-flex flex-column justify-content-center align-items-start ps-3 gap-5"
            >
              <div className="row gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="input col-sm-12 col-md-12 col-lg-5 d-flex flex-grow-1"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input col-sm-12 col-md-12 col-lg-5 d-flex flex-grow-1"
                />
                <input
                  type="text"
                  placeholder="Message"
                  className="input col-12 d-flex flex-grow-1 "
                />
              </div>

              {/* contact-button */}
              <button className="contact-button"> SEND MESSAGE</button>
            </form>
          </div>

          {/* contact_details */}

          <div className="col-sm-12 col-md-12 col-lg-3 mt-5">
            <h4>Contact Info</h4>

            {/* address */}

            <div className="adderss">
              <p>
                <b> Address</b>
              </p>
              <p>1234 Street Name, City, State, 12345</p>
            </div>

            {/* phone */}

            <div className="phone">
              <p>
                <b>Phone</b>
              </p>
              <p>(123) 456-7890</p>
            </div>

            {/* email */}

            <div className="email">
              <p>
                <b>Email</b>
              </p>
              <p>ayyapparayudu.ravuvari@gamil.com</p>
            </div>
          </div>
        </div>
        <hr />
      </div>

      {/* Footer */}
      <footer className="footer d-flex flex-column justify-content-center align-items-center p-5">
        <p>© 2025 Landing Page. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Wholepage;
