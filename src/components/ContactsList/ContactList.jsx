import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { StyledContactList, StyledListItem } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filterInput = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterInput.toLowerCase())
  );
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
