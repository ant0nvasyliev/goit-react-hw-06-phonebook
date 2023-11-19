import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
import { MainTitle, SecondaryTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Dimon Oleksenko', number: '666-66-66' },
      { id: 'id-6', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-7', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-8', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-9', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-10', name: 'Dimon Oleksenko', number: '666-66-66' },
    ],
    filter: '',
  };
  // Додаємо новий контакт
  handleAddContact = newContact => {
    const enteredName = newContact.name;

    if (
      // перевіряємо наявність contact в state.contacts прирівнюючи їх до нижнього регістру
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === enteredName.toLowerCase()
      )
    ) {
      // якщо імя вже є в state.contacts то виводимо alert
      alert(`${enteredName} already recorded in the directory`);
      return;
    }
    // Якщо ім'я ще немає в state.contacts то записуємо його до state.contacts збережених
    // у попередньому стані за допомогою prevState.contacts та розпилення масиву (...prevState.contacts)
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };
  // Фільтр контактів
  handleChangeFilter = newSymbol => {
    this.setState({
      filter: newSymbol,
    });
  };
  // Видалення контакту
  handleContactDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };
  // Виносимо логіку з рендера
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // отримуємо contactsData з localStorage.getItem('contacts')
  // парсимо їх JSON.parse(contactsData) та отримуємо parsedContactsData
  // якщо вони - (parsedContactsData) true, то записуємо їх в стейт - this.setState({ contacts: parsedContactsData })

  componentDidMount() {
    const contactsData = localStorage.getItem('contacts');
    const parsedContactsData = JSON.parse(contactsData);
    if (parsedContactsData) {
      this.setState({ contacts: parsedContactsData });
    }
  }

  // якщо state не такий як prevState то зберігаємо в localStorage state у вигляді рядка JSON.stringify
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm addContact={this.handleAddContact} />

        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter contactFilter={filter} onChange={this.handleChangeFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.handleContactDelete}
        />
      </div>
    );
  }
}
