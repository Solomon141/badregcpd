import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPeriscope, FaTelegramPlane, FaWhatsapp, FaTwitter, FaPhone, FaGlobe, FaArrowAltCircleRight } from 'react-icons/fa';

function Footer() {
  const addressHeader = {
    fontSize: 25,
    paddingTop: 10,
  };
  const footerTitle = {
    fontWeight: 'bold',
    paddingBottom: 20,
    fontSize: 25,
    color: '#fff',
  };
  return (
    <Container fluid style={{ backgroundColor: '#f59028' }}>
      <div className="container" style={{ padding: 20 }}>
        <Row>
          <Col md={5}>
            <h5 style={footerTitle}> BADREG</h5>
            <p> Badreg PLC is a family bussiness established in 1997 G.C. Badreg PLC is engaged in Importing and distribution of pharmaceuticals, Medicated cosmetics and food supplement products through out the country. </p>

            <p> Badreg have more than 10 suppliers from different parts of the world such as Canada, Japan, Jordan, India, Indonesia, Malaysiac etc </p>
            <p> Job Opportunity for about 120 citizens. </p>
            <p style={addressHeader}>
              <FaTelegramPlane /> <FaWhatsapp /> <FaTwitter />
            </p>
          </Col>
          <Col md={4}>
            <h5 style={footerTitle}> LOCATION </h5>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.358858447266!2d38.743644073848905!3d9.030991388960194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85badcb20993%3A0xf23d0943573f775a!2sBadreg%20Pvt.Ltd.Co!5e0!3m2!1sam!2set!4v1682595342637!5m2!1sam!2set" width="100%" height="70%" style={{ borderRadius: 20, border: 0, opacity: 0.3 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
              BADREG MAP
            </iframe>
          </Col>
          <Col md={3}>
            <h5 style={footerTitle}> CONTACT </h5>
            <p>
              <b> EMAIL </b>
            </p>
            <ul className="list-unstyled">
              <li> sales@badregplc.com </li>
              <li> info@badregplc.com </li>
            </ul>
            <p>
              <b> PHONE </b>
            </p>
            <ul className="list-unstyled">
              <li>+251 945 02 02 02 </li>
              <li>+251 11 126 40 72/ 15 </li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            &copy;{new Date().getFullYear()} badregplc.com
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Footer;
