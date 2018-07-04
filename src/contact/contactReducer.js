const contactReducer = (state = {}, action) => {
  console.log('contactReducer: state', state);
  console.log('contactReducer: action', action);
  switch (action.type) {
    case 'EDIT_CONTACT':
      const {id, name, tel} = action.contact;
      return {
        id,
        name,
        tel
      };

    default:
      return state;
  }
};

export default contactReducer;
