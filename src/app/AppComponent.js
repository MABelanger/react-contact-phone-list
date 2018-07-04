import React, { Component } from 'react';
import Contacts from '../contacts/ContactsContainer';
import ContactForm from '../contactForm/ContactFormComponent';

const App = ({visibilityContactForm}) => {
  const contacts = [
    {
      id: 1,
      name : 'bibi',
      tel : '514-513-2610'
    }
  ];

  return (
    <div className="App">
      <h1>react-contact-phone-list</h1>
      <Contacts />
      {visibilityContactForm ? <ContactForm/>: null}
    </div>
  );
}

export default App;
