import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm.js';
import ContactList from './ContactList/ContactList.js';
import Filter from './Filter/Filter.js';

import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitHandler = newContact => {
    const { contacts } = this.state;
    const existingContact = contacts.find(
      contact => contact.name === newContact.name,
    );
    if (existingContact) {
      alert(`${existingContact.name} is already in contacts.`);
      return;
    }
    this.setState({ contacts: [newContact, ...contacts] });
  };

  filterUpdate = event => {
    const { value } = event.currentTarget;

    this.setState({
      filter: value,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId,
        ),
      };
    });
  };

  render() {
    const filtered = this.state.contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(this.state.filter.toLocaleLowerCase()) ||
        number.includes(this.state.filter),
    );

    return (
      <div className="wrapper">
        <h1 className="pageTitle">Phonebook</h1>
          <ContactForm submitHandler={this.submitHandler} />
          <Filter
            filterValue={this.state.filter}
            filterUpdate={this.filterUpdate}
          />
          <h2 className="contactsTitle">Contacts list</h2>
          <ContactList
            filtered={filtered}
            onDeleteContact={this.deleteContact}
          />
      </div>
    );

    }
  };   

export default App;