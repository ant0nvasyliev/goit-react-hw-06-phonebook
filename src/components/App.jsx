import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
import { MainTitle, SecondaryTitle } from './App.styled';

export const App = () => {
return (
    <>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm/>
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactList/>
    </>
  );
};
export default App;
