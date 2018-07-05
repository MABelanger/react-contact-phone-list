let nextContactId = 0;

export const addContact = (newContact) => ({
  type: 'ADD_CONTACT',
  contact: {
    ...newContact,
    id: nextContactId++
  }
});

export const saveContact = (contact) => ({
  type: 'SAVE_CONTACT',
  contact
});

export const clearContact = () => ({
  type: 'CLEAR_CONTACT'
});

export const editContact = (contact) => ({
  type: 'EDIT_CONTACT',
  contact
});
