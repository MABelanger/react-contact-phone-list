import React from 'react';

const ContactComponent = ({addContact, contact={}}) => {
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
        tel : inputTel.value
      };
      addContact(newContact);

      inputName.value = '';
      inputTel.value = '';
    }}>
      <input ref={
        (node) => {
          inputName = node;
          if(contact.id) {
            inputName.value = initName;
          }
      }}/>

      <input ref={
        (node) => {
          inputTel = node;
          if(contact.id) {
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
