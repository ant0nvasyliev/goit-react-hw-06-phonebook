import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { StyledContactList, StyledListItem } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlice';
import { getContacts } from '../../redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  // console.log('Contacts:', contacts);
  const filterInput = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterInput.toLowerCase())
  );
  // console.log(ContactList);
  return (
    <>
      <StyledContactList>
        {filteredContacts.map(contact => (
          <StyledListItem key={contact.id}>
            <ContactListItem contactData={contact} />
          </StyledListItem>
        ))}
      </StyledContactList>
    </>
  );
};
