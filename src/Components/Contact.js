import React from 'react';
import { FaPeriscope, FaTelegramPlane, FaWhatsapp, FaTwitter, FaPhone, FaGlobe, FaArrowAltCircleRight } from 'react-icons/fa';

import ContactImage from '../Images/Contact.png';

function Contact() {
  const titleStyle = {
    display: 'flex',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: '#f59028',
  };

  const titleSubStyle = {
    display: 'flex',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: '#f59028',
    // @media
  };

  const addressHeader = {
    fontSize: 25,
    paddingTop: 10,
  };

  return (
    <div className="container">
      <div style={titleStyle}>OUR CONTACT DETAILS</div>
      <div className="row" style={{  alignContent:"center",justifyContent:'center' , paddingBottom: 10 , paddingTop:20}}>
       <img style={{ height: '70%', width: '70%' }} src={ContactImage} alt="logo" />
      </div>
      <div style={titleStyle}> CONTACT US </div>
      <div className="row" style={{ paddingBottom: 10 }}>
        <div className="col-sm-6" style={{ padding: 30, letterSpacing: 3 }}>
          Wish to enquire about admissions, syllabus, or anything else? you can walk in during office hours, give us a call or simply submit the form here.
          <p style={addressHeader}>
            <FaPeriscope /> Location
          </p>
          <p>
            Sub city : Arada <br />
            woreda: 01, H.No: New <br />
            Badreg Building, Somale Tera, Piazza area <br />
          </p>
          <p style={addressHeader}>
            <FaPhone /> Phone
          </p>
          <p> +251-945-02-02-02 </p>
          <p> +251-111-26-40-72 </p>
          <p style={addressHeader}>
            <FaGlobe /> Email
          </p>
          <p> badreg_pharma@yahoo.com </p>
          <p style={addressHeader}>
            <FaTelegramPlane style={{ color: '#f59028' }} /> <FaWhatsapp style={{ color: '#f59028' }} /> <FaTwitter style={{ color: '#f59028' }} />
          </p>
        </div>
        <div className="col-sm-6" style={{ padding: 10 }}>
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: 10 }}>
            {/* <p style={titleSubStyle}> Send us a message </p> */}
            <p style={addressHeader}>SEND US A MESSAGE</p>
            <input type="text" style={{ paddingBottom: 10 }} placeholder="Full Name" className="form-control" />
            <input type="text" placeholder="Email Address" className="form-control" />
            <input type="text" placeholder="Subject" className="form-control" />
            <input type="text" placeholder="Your Message" className="form-control" />
            <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
              <button className="form-control" style={{ alignItems: 'center', fontWeight: 'bold', color: '#fff', backgroundColor: '#f59028' }}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
