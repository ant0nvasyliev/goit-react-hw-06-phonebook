import { ContactListItem } from 'components/ContactListItem/ContactListItem'
import { StyledContactList, StyledListItem } from './ContactList.styled'


export const ContactList = ({ contacts, deleteContact }) => {
   return (
      <>
      <StyledContactList>
         {contacts.map(contact => (
            <StyledListItem key={contact.id}>
               <ContactListItem contactData={contact} onDelete={deleteContact}/>
            </StyledListItem>
         ))}
         
      </StyledContactList>
      </>
   )
}
