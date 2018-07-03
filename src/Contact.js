import React from 'react';

const Contact = ({name, tel}) => {
  console.log('name, tel', name, tel);
  return(
    <li>
      {name} : {tel}
    </li>
  );
}

export default Contact
