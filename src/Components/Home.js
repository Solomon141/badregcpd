import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import one from '../Images/Carousel/1s.JPG';
import two from '../Images/Carousel/2s.JPG';
import three from '../Images/Carousel/3s.JPG';
import four from '../Images/Carousel/4s.JPG';

import Kemi from '../Images/Carousel/kemi.jpg';
import Dr from '../Images/Carousel/Dr.JPG';
import Attendees from '../Images/Carousel/Attendees.JPG';

import blended from '../Images/LearningStyles/blended.jpg';
import facetoface from '../Images/LearningStyles/facetoface.png';
import online from '../Images/LearningStyles/online.jpg';

function Home() {
  const headingStyles = {
    fontSize: 40,
    color: '#f59028',
    paddingTop: 30,
  };

  const [count, setCount] = useState(0);
  const [trainingTopics, setTrainingTopics] = useState(75);
  const [registeredTrainees, setRegisteredTrainees] = useState(123);
  const [qualifiedProfessionals, setQualifiedProfessionals] = useState(193);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 1700) {
        setCount(count + 35);
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item>
            <img style={{ height: 450 }} className="d-block w-100" src={Dr} alt="First slide" />
            <Carousel.Caption style={{ color: '#f59028' }}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ height: 450 }} className="d-block w-100" src={Kemi} alt="Second slide" />
            <Carousel.Caption style={{ color: '#f59028' }}>
              <h3>KEMIYA</h3>
              <p>Presenting on the annual conference of ESHO.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ height: 450 }} className="d-block w-100" src={Attendees} alt="Third slide" />

            <Carousel.Caption style={{ color: '#f59028' }}>
              <h3>Trainees</h3>
              <p>At Sheraton Hotel.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div style={{ paddingBottom: 10 }} className="container">
        <div className="row" style={{ paddingTop: 10 }}>
          <div className="col-sm-3">
            <Card border="light" className="text-center">
              <Card.Body style={{ fontSize: 70, fontWeight: 'bold' }}>{count}+ </Card.Body>
              <Card.Footer style={{ color: '#f59028', fontWeight: 'bold' }}>Customers</Card.Footer>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card border="light" className="text-center">
              <Card.Body style={{ fontSize: 70, fontWeight: 'bold' }}>{trainingTopics}+ </Card.Body>
              <Card.Footer style={{ color: '#f59028', fontWeight: 'bold' }}>Training Topics</Card.Footer>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card border="light" className="text-center">
              <Card.Body style={{ fontSize: 70, fontWeight: 'bold' }}>{registeredTrainees}+ </Card.Body>
              <Card.Footer style={{ color: '#f59028', fontWeight: 'bold' }}>Registered Trainees</Card.Footer>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card border="light" className="text-center">
              <Card.Body style={{ fontSize: 70, fontWeight: 'bold' }}>{qualifiedProfessionals}+ </Card.Body>
              <Card.Footer style={{ color: '#f59028', fontWeight: 'bold' }}>Qualified Professionals</Card.Footer>
            </Card>
          </div>
        </div>
      </div>
      {/* OBJECTIVES START  */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 10 }} className="container">
        {/* <p style={headingStyles}> OUR OBJECTIVES </p> */}
        <p style={headingStyles}> WHO WE ARE </p>
      </div>

      <div className="container">
        {/* <blockquote className="blockquote">
          <p className="mb-0">"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice."</p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote> */}
        <p> Badreg Pvt. Ltd. Co. is one of the most reputable companies in Ethiopia which is primarily engaged in the business of import and distribution of quality, affordable and diversified range of pharmaceutical products, cosmetics, auto paint, electrical goods and building materials.</p>
        <p> Badreg Pvt. Ltd. Co. was founded in 1997 and right from our humble beginnings we always strived to provide the highest quality products at the best value for money. Our product supply range expanded over the years combined with a commitment to our customers to provide the highest standards of services that became in-built in our work culture and practices.</p>
        <p> Continuing Professional Development (CPD) is a career-long process that involves the tracking and documenting of skills, knowledge and experience gained, both formally and informally, beyond any initial education and training. It helps pharmacists to keep their practice and proficiency up to date to maintain standards. All pharmacists must undertake Continuing Professional Development (CPD) on an annual basis in order to be eligible to continue their registration.</p>
        <p> As health care providers, pharmacy professionals are accountable to the patients they care for by ensuring their knowledge 
          and skills are up-to-date and they remain competent to practice. Professional development for pharmacists is important because it helps 
          them stay current with new developments in the field of pharmacy and improve their skills. 
          We <b> Badreg PLC </b> are happly involved in training the professionals so that       
        pharmacists could be able to keep their practice and proficiency up to date to maintain standards
           </p>
      </div>

      {/* OBJECTIVES END  */}

      {/* CPD APPROACHES START  */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 10 }} className="container">
        <p style={headingStyles}> CPD APPROACHES </p>
      </div>
      <div style={{ paddingBottom: 10 }} className="container">
        <div className="row">
          <div className="col-sm-4">
            <Card>
              <Card.Img variant="top" src={facetoface} />
              <Card.Body>
                <Card.Title>Face to Face</Card.Title>
                <Card.Text> It’s one of the training modality used at BADREG CPD center. Face-to-face learning is an instructional method where course content and learning material are taught in person to a group of students. This allows for a live interaction between a learner and an instructor. </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card>
              <Card.Img variant="top" src={online} />
              <Card.Body>
                <Card.Title> Online Learning </Card.Title>
                <Card.Text> It is one of the training modality/ a form of instruction that takes place completely on the internet. </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card>
              <Card.Img variant="top" src={blended} />
              <Card.Body>
                <Card.Title> Blended Leaning </Card.Title>
                <Card.Text> Blended learning is a learning approach that combines instructor-led brick-and-mortar classroom training and online learning activities. </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* CPD APPROACHES END  */}

      {/* COURSE OVERVIEW START  */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 10 }} className="container">
        <p style={headingStyles}> COURSE OVERVIEW </p>
      </div>
      <div className="container">
        <p style={{ color: '#f59028', fontWeight: 'bold' }}> Description: </p>
        <p> This training is designed to enable participants to implement APTS by addressing the APTS essential elements (efficiency, accountability and transparency human power deployment and development, reliable information for decision making on product, finance and services and patient satisfaction) and it describes the implementation strategies of all the essential elements by improving the premises and using legal framework; auditing, monitoring and evaluation tools. </p>
        <p style={{ color: '#f59028', fontWeight: 'bold' }}> Objective/Competency: </p>
        <p> By the end of the training , participants will be able to </p>
        <ul>
          <li> Analyse the evolutions of APTS, achievements, challenges, essential elements, lessons learnt and benefits. </li>
          <li> Apply the principles of pharmacy service and organization for the quality of pharmacy practice and operations. </li>
          <li> Apply the national pharmaceutical coding system. </li>
          <li> Apply principles of APTS to conduct physical inventory of pharmaceuticals. </li>
          <li> Utilize receiving and issuing vouchers by conducting various activities of products transactions from store to service delivery units. </li>
          <li> Practice daily summary and monthly reports on finance and product transacted and service rendered. </li>
          <li> Provide rational medicine dispensing and counseling service to patients using good dispensing practice in APTS workflow. </li>
        </ul>
      </div>
      <div className="container">
        {/* <div className="row">
          <div className="col-sm-4">
            <Card>
              <Card.Img variant="top" src={facetoface} />
              <Card.Body>
                <Card.Title>Face to Face</Card.Title>
                <Card.Text> It’s one of the training modality used at BADREG CPD center. Face-to-face learning is an instructional method where course content and learning material are taught in person to a group of students. This allows for a live interaction between a learner and an instructor. </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card>
              <Card.Img variant="top" src={blended} />
              <Card.Body>
                <Card.Title> Blended Leaning </Card.Title>
                <Card.Text> Blended learning is a learning approach that combines instructor-led brick-and-mortar classroom training and online learning activities. </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card>
              <Card.Img variant="top" src={online} />
              <Card.Body>
                <Card.Title> Online Learning </Card.Title>
                <Card.Text> It is one of the training modality/ a form of instruction that takes place completely on the internet. </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div> */}
      </div>
      {/* COURSE OVERVIEW END  */}

      {/* VISION MISSION and VALUES START  */}
      <div className="container" style={{ paddingTop: 20 }}>
        <div className="row">
          <div className="col-sm-4">
            <p>
              <b> TARGET AUDIENCE </b>
            </p>
            <p> Participants for this course should be program managers, training coordinators and other professionals who are working in health related projects and programs. </p>
            <p> Have a minimum of first degree and above. </p>
            <p> Participants need to have at least two years of relevant work experience in program management. </p>
          </div>
          <div className="col-sm-8">
            <div style={{ paddingBottom: 10 }} className="container">
              <p style={{ color: '#f59028', fontWeight: 'bold' }}> Our Mission Statement </p>
              <p> To provide the public with effective and quality pharmaceutical products at an affordable price</p>

              <p style={{ color: '#f59028', fontWeight: 'bold' }}> Our Vision Statement </p>
              <p> To become a center of Health Care Excellence in Africa </p>

              <p style={{ color: '#f59028', fontWeight: 'bold' }}> Our Core Values </p>
              <ul>
                <li> Person Contentedness </li>
                <li> Professionalism </li>
                <li> Ownership </li>
                <li> Innovation </li>
                <li> Excellence </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* VISION MISSION and VALUES END  */}
    </>
  );
}

export default Home;
