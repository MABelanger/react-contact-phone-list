import React from 'react';

const Contact = ({name, tel}) => {
  return(
    <li>
      {name} : {tel}
    </li>
  );
}

export default Contact
