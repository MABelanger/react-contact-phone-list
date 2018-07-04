import React from 'react';
import ContactContainer from '../contact/ContactContainer'

const ContactForm = ({contactFormVisibility}) => {
  console.log('contactFormVisibility', contactFormVisibility);
  if(contactFormVisibility){
    return (
      <div>
        <h1>FORM</h1>
        <ContactContainer/>
      </div>
    );
  }
  return null;
}


export default ContactForm;
