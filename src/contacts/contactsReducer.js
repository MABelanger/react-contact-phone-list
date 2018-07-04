const initState = [
  {
    id: 1,
    name: 'toto',
    tel: '514-513-2610'
  }
];

const contactsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      const { id, name, tel } = action.contact;
      return [
        ...state,
        {
          id,
          name,
          tel
        }
      ];

    case 'SAVE_CONTACT':
      return state.map(contact =>
        (contact.id !== action.id)
          ? {...contact, name: action.name, tel: action.tel}
          : contact
      );

    case 'DELETE_CONTACT':
      return state.filter(contact => (contact.id !== action.id));

    default:
      return state
  }
}



export default contactsReducer;
