import React from 'react';

const isRegisteredContact = (contact)=> {
  return contact && Number.isInteger(contact.id);
}

const ContactComponent = ({saveContact, addContact, contact={}}) => {
  let inputName;
  let inputTel;

  const initName = contact.name;
  const initTel = contact.tel;

  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (!inputName.value.trim() || !inputTel.value.trim()) {
        return;
      }

      const newContact = {
        name : inputName.value,
        tel : inputTel.value,
        id: contact.id
      };

      if(isRegisteredContact(newContact)) {
        saveContact(newContact)
      } else {
        addContact(newContact);
      }

      inputName.value = '';
      inputTel.value = '';
    }}>
      <input ref={
        (node) => {
          inputName = node;
          console.log('node', node);
          if(inputName && isRegisteredContact(contact)) {
            inputName.value = initName;
          }
      }}/>

      <input ref={
        (node) => {
          inputTel = node;
          if(inputTel && isRegisteredContact(contact)) {
            inputTel.value = initTel;
          }
      }}/>
      <button type="submit">
        Save
      </button>
    </form>
  );
}


export default ContactComponent;
