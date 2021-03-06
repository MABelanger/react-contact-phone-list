const contactReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_CONTACT':
      return {
        ...action.contact
      };

    case 'CLEAR_CONTACT':
      return {};

    default:
      return state;
  }
};

export default contactReducer;
