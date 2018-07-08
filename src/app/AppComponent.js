import React from 'react';
import Contacts from '../contacts/ContactsContainer';
import ContactForm from '../contactForm/ContactFormContainer';

const App = ({onDisplayContactForm, pathParam}) => {
  console.log('pathParam', pathParam);
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
