import React from 'react';

const Contact = ({name, tel, id, onDelete}) => {
  return(
    <li>
      {name} : {tel} <button onClick={()=>onDelete(id)}>X</button>
    </li>
  );
}

export default Contact
