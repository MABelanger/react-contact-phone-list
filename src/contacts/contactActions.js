export const editContact = (contact) => ({
  type: 'EDIT_CONTACT',
  contact
});

export const deleteContact = (id) => ({
  type: 'DELETE_CONTACT',
  id
});
