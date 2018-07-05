import React from 'react';
import Contact from './Contact';

const Contacts = ({contacts, onDelete, onEdit}) => {

  return(
    <div>
      <ul>
        {contacts.map((contact) =>{
          const {id, name, tel} = contact;
          return <Contact
            id={id}
            name={name}
            tel={tel}
            onDelete={onDelete}
            onEdit={onEdit}
            key={id}
          />
          })
        }
      </ul>
    </div>
  );
}

export default Contacts;
