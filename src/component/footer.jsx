import neo from '../assets/images/PNG/NeoEye.png';

const Footer = () => {
  return (
    <footer className="footer">
      <article className="footer-row">
        <div className="footer-col">
          <img className="logo" src={neo} alt="NeoEye Logo" />
        </div>
        <div className="footer-col">
          <div className="info-container">
            <i className="fa-solid fa-location-dot location"></i>
            <p className="address">
              NeoVision Optical Building,
              <br />
              Malinao St., Malabo Mata,
              <br />
              Pulang-lupa, Phil.
            </p>
          </div>
          <div className="info-container">
            <i className="fa-solid fa-phone phone"></i>
            <p className="pNumber">(632) 8988-7000</p>
          </div>
          <div className="info-container">
            <i className="fa-solid fa-envelope envelope"></i>
            <p className="eMail">neoeye@gmail.com</p>
          </div>
        </div>
        <div className="footer-col">
          <div className="service-container">
            <h4 className="customer-service">customer service</h4>
            <ul className="links">
              <li className="link">Consultation/Diagnostics</li>
              <li className="link">Eye care services</li>
              <li className="link">Eyewears</li>
            </ul>
          </div>
          <div className="aboutUs-container">
            <h4 className="about-us">about us</h4>
            <ul className="links">
              <li className="link">Mission and Vision</li>
              <li className="link">Board of Directors</li>
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <h4 className="connect">connect</h4>
          <div className="social-container">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </article>
      <p className="copyright">&copy; 2023. all rights reserved.</p>
    </footer>
  );
};

export default Footer;
