let nextContactId = 0;

export const addContact = (name, tel) => ({
  type: 'ADD_CONTACT',
  id: nextContactId++,
  name,
  tel
});

export const displayContactForm = (isDisplayContactForm) => ({
  type: 'DISPLAY_CONTACT_FORM',
  isDisplayContactForm,
});




export const saveContact = (name, tel, id) => ({
  type: 'SAVE_CONTACT',
  id,
  name,
  tel
});

export const deleteContact = (id) => ({
  type: 'DELETE_CONTACT',
  id
});
