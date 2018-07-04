import React from 'react';
import Contact from './Contact';

const Contacts = ({contacts}) => {
  return(
    <div>
      <ul>
        {contacts.map((contact) => <Contact {...contact} key={contact.id}/>)}
      </ul>
    </div>
  );
}

export default Contacts;
