import React from "react";

function Footer() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>
      <address>
        <div>
          <p>
            5500 S Some Street <br />
            Some Town, UT <br />
            84345
            <br />
          </p>
        </div>
        <div>
          <p>P: 801.801.8010</p>
        </div>
        <div>
          <p>
            GitHub: <a href="https://github.com/joelcutler">joelcutler</a>
          </p>
        </div>
        <div>
          <p>
            E: <a href="mailto:Joel@JoelCutler.com">Joel@JoelCutler.com</a>
          </p>
        </div>
        <div>
          <p>
            IG: <a href="https://www.instagram.com/joel.avery/">joel.avery</a>
          </p>
        </div>
      </address>
    </section>
  );
}

export default Footer;
