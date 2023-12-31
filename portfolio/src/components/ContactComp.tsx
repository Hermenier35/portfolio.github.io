import React from 'react';
import '../style/ContactComp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactComp() {
    return (
      <div className="contact">
        <h2>Contact</h2>
        <div className='icones'>
            <div className='item'>
            <   FontAwesomeIcon icon={faPhone} className="icon-large" /> 
            <p>06.66.35.77.96</p>
            </div>
            <div className='item'>
                <FontAwesomeIcon icon={faEnvelope} className="icon-large" /> 
                <p>pierreedouardhermenier@gmail.com</p>
            </div>
        </div> 
      </div>
    );
  }
  
  export default ContactComp;