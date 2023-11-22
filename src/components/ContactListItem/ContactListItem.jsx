import {
  StyledContactListText,
  StyledDeleteButton,
} from './ContactListItem.styled';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactListItem = ({ contactData: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledContactListText>Name: {name}</StyledContactListText>
      <StyledContactListText>Number: {number}</StyledContactListText>
      <StyledDeleteButton
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        <MdOutlineDeleteForever />
      </StyledDeleteButton>
    </>
  );
};
