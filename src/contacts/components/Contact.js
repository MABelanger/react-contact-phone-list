import React from 'react';

const Contact = ({id, name, tel, onDelete, onEdit}) => {

  return(
    <li>
      <a href='#' onClick={()=>onEdit({id, name, tel})}>
        {id}: {name} : {tel}
      </a>
      <button onClick={()=>onDelete(id)}>X</button>
    </li>
  );
}

export default Contact
