import { StyledContactListText, StyledDeleteButton } from './ContactListItem.styled'
import { MdOutlineDeleteForever } from 'react-icons/md';


export const ContactListItem = ({ contactData: { name, number, id }, onDelete }) => {
   return (
      <>
         <StyledContactListText>Name: {name}</StyledContactListText>
         <StyledContactListText>Number: {number}</StyledContactListText>
         <StyledDeleteButton type="button" onClick={() => onDelete(id)} ><MdOutlineDeleteForever/></StyledDeleteButton>
      </>
   )
}





