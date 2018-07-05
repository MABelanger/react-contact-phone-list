const initState = [
  {
    id: 1,
    name: 'toto',
    tel: '514-513-2610'
  }
];

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [
        ...state,
        action.contact
      ];

    case 'SAVE_CONTACT':
      return state.map(contact =>
        (contact.id === action.contact.id)
          ? {...contact, ...action.contact}
          : contact
      );

    case 'DELETE_CONTACT':
      return state.filter(contact => (contact.id !== action.id));

    default:
      return state
  }
}



export default contactsReducer;
