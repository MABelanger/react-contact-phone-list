import React, { Component } from 'react';
import Contacts from './Contacts';

class App extends Component {
  render() {
    const contacts = [
      {
        'name' : 'bibi',
        'tel' : '514-513-2610'
      }
    ];

    return (
      <div className="App">
        <h1>react-contact-phone-list</h1>
        <Contacts contacts={contacts}/>
      </div>
    );
  }
}

export default App;
