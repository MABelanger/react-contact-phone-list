import React from 'react';

import Contact from './Contact';
import ContactForm from './ContactForm';

let id=0;
const Contacts = ({contacts}) => {
  return(
    <div>
      <button>add contact</button>
      <ul>
        {contacts.map((contact) => <Contact {...contact} key={id}/>)}
      </ul>
      <ContactForm/>
    </div>
  );
}

export default Contacts;
