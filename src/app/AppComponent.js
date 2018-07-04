import React, { Component } from 'react';
import Contacts from '../containers/Contacts';

const App = () => {
  const contacts = [
    {
      id: 1,
      name : 'bibi',
      tel : '514-513-2610'
    }
  ];

  return (
    <div className="App">
      <h1>react-contact-phone-list</h1>
      <Contacts />
    </div>
  );
}

export default App;
