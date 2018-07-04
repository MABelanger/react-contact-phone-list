import React from 'react';

import Contact from './Contact';
import ContactForm from './ContactForm';

const Contacts = ({contacts, visibilityContactForm, onAddContact}) => {
  console.log('visibilityContactForm', visibilityContactForm);
  return(
    <div>
      <ul>
        {contacts.map((contact) => <Contact {...contact} key={contact.id}/>)}
      </ul>
      <button onClick={onAddContact}>add contact</button>
      {visibilityContactForm ? <ContactForm/>: null}
    </div>
  );
}

export default Contacts;
