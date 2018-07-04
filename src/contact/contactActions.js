let nextContactId = 0;

export const addContact = (newContact) => ({
  type: 'ADD_CONTACT',
  contact: {
    ...newContact,
    id: nextContactId++
  }
});
