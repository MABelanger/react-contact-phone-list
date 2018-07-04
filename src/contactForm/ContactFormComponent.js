import React from 'react';

// redux name, tel, id
const ContactForm = ({contactFormVisibility}) => {
  if(contactFormVisibility){
    return(
      <div>
        ContactForm
      </div>
    );
  }
  return null;
}


export default ContactForm;
