import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
import { MainTitle, SecondaryTitle } from './App.styled';

export const App = () => {
  // Функція початкового стану localStorage
  const initialLocalStorageValue = () => {
    const contactsData = localStorage.getItem('contacts');
    if (contactsData !== null) {
      return JSON.parse(contactsData);
    }
    return [];
  };

  // Хуки
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(initialLocalStorageValue);

  // Функція додавання контакту
  const handleAddContact = newContact => {
    const enteredName = newContact.name;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === enteredName.toLowerCase()
      )
    ) {
      alert(`${enteredName} вже є в каталозі`);
    } else {
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };
  // Видалення контактів
  const handleContactDelete = contactId => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== contactId);
    });
  };

  // Додавання фільтру в стейт
  const handleChangeFilter = newSymbol => {
    setFilter(newSymbol);
  };

  // Відфільтровані контакти зі стейту
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm addContact={handleAddContact} />

      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter contactFilter={filter} onChange={handleChangeFilter} />
      <ContactList
        contacts={getFilteredContacts()}
        deleteContact={handleContactDelete}
      />
    </div>
  );
};

export default App;
