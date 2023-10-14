import React from 'react';
import imgbts from '../assets/JPG/about_us.jpg';
import '../css/neoeye.css';

export const Neoeye = () => {
  return (
    <>
      <div className="neoeye">
        <h1 className="neoeye-header">About NeoEye Optical</h1>
        <div className="neoeyes-container">
          <div className="neoeye-container">
            <p className="neoeye-para">
              Welcome to NeoEye Optical Clinic, a leading name in the
              Philippines' eye care landscape. Our dedicated team of experienced
              doctors is committed to providing top-tier eye care services to
              our valued patients. Our approach revolves around delivering
              personalized, patient-centered care that caters to the unique
              needs of every individual.
            </p>
            <p className="neoeye-para">
              At NeoEye, we merge our years of expertise with the latest in eye
              care technology to diagnose and treat a wide range of eye
              conditions. Whether you require a routine eye examination,
              precision contact lens fittings, or specialized treatment for an
              eye ailment, we're here to serve you with the utmost
              professionalism and knowledge. Our mission is not only to
              safeguard and improve your eye health but also to empower you
              through informed decision-making, as we believe that well-informed
              patients are more likely to achieve the best outcomes. NeoEye
              Optical Clinic isn't just a place for eye care – it's a sanctuary
              where expertise and compassion merge to enhance your vision and
              protect your ocular well-being. We invite you to experience the
              NeoEye difference.
            </p>
          </div>
          <img
            className="img-doctor"
            src={imgbts}
            alt="Doctor with stethoscope"
          />
        </div>
      </div>
    </>
  );
};
