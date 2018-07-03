import React from 'react';

import Contact from './Contact';

const renderContacts = (contacts) => {
  return contacts.map((contact)=>{
    return <Contact {...contact} />
  })
}

const Contacts = ({contacts}) => {
  return(
    <ul>
      {renderContacts(contacts)}
    </ul>
  );
}

export default Contacts;
