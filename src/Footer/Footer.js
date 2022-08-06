import "./Footer.css";
import { FaGithub } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
import { GrFacebook } from "react-icons/gr"
import { AiFillFileText } from "react-icons/ai"

const Footer = () => {
  return (
    <div>
      <footer class="footer_area section_padding_130_0">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="single-footer-widget section_padding_0_130">
                <div class="footer-logo mb-3"></div>
                <p style={{ color: "hsl(251, 97%, 64%)" }}>
                  VTBlog is a website is simply use for publishing of blogs with
                  Portfolio
                </p>

                {/* <!-- Footer Social Area--> */}
                <div class="footer_social_area">
                  <a
                    href="https://github.com/leonardegbaaibon"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/leonard-egbaaibon/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Linkedin"
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    href="https://docs.google.com/document/d/1HVpGFAZfPvCtitTSIbZQ1Yy3hc1O4QK3xrXv0bUPAwo/edit?usp=sharing"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="CV"
                  >
                    <AiFillFileText />
                  </a>
                  <a
                    href="https://web.facebook.com/realcod3r"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Facebook"
                  >
                    <GrFacebook />
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Single Widget--> */}
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="single-footer-widget section_padding_0_130">
                {/* <!-- Widget Title--> */}
                <h5
                  class="widget-title"
                  style={{ fontFamily: "Lobster, cursive" }}
                >
                  About
                </h5>
                {/* <!-- Footer Menu--> */}
                <div class="footer_menu">
                  <ul>
                    <li>
                      <a href="/">About Us</a>
                    </li>
                    <li>
                      <a href="/">Corporate Sale</a>
                    </li>
                    <li>
                      <a href="/">Terms &amp; Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- Single Widget--> */}
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="single-footer-widget section_padding_0_130">
                {/* <!-- Widget Title--> */}
                <h5
                  class="widget-title"
                  style={{ fontFamily: "Lobster, cursive" }}
                >
                  Support
                </h5>
                {/* <!-- Footer Menu--> */}
                <div class="footer_menu">
                  <ul>
                    <li>
                      <a href="/">Help</a>
                    </li>
                    <li>
                      <a href="/">Support</a>
                    </li>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- Single Widget--> */}
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="single-footer-widget section_padding_0_130">
                {/* <!-- Widget Title--> */}
                <h5
                  class="widget-title"
                  style={{ fontFamily: "Lobster, cursive" }}
                >
                  Contact
                </h5>
                {/* <!-- Footer Menu--> */}
                <div class="footer_menu">
                  <ul>
                    <li>
                      <a href="/">Call Centre</a>
                    </li>
                    <li>
                      <a href="/">Email Us</a>
                    </li>
                    <li>
                      <a href="/">Term &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
