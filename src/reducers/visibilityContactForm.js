const visibilityContactForm = (state = false, action) => {
  switch (action.type) {
    case 'VISIBILITY_CONTACT_FORM':
      return action.visibility;

    default:
      return state;
  }
};

export default visibilityContactForm;
