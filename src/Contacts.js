import React from 'react';

import Contact from './Contact';

const Contacts = ({contacts}) => {
  return(
    <ul>
      {contacts.map((contact) => <Contact {...contact} />)}
    </ul>
  );
}

export default Contacts;
