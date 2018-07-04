import React, { Component } from 'react';
import Contacts from '../contacts/ContactsContainer';
import ContactForm from '../contactForm/ContactFormComponent';

const App = ({onDisplayContactForm}) => {
  return (
    <div className="App">
      <h1>react-contact-phone-list</h1>
      <Contacts />
      <button onClick={onDisplayContactForm}>onDisplayContactForm</button>
      <ContactForm/>
    </div>
  );
}

export default App;
