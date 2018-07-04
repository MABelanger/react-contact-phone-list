const contactFormVisibilityReducer = (state = false, action) => {
  console.log('contactFormVisibilityReducer: action', action);
  switch (action.type) {
    case 'VISIBILITY_CONTACT_FORM':
      return action.isDisplayContactForm;

    default:
      return state;
  }
};

export default contactFormVisibilityReducer;
