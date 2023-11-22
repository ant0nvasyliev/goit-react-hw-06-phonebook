import { Formik, ErrorMessage } from 'formik';
import { StyledForm, StyledFild, AddButton } from './ContactForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, 'Invalid name')
    .required('This is required!')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  number: Yup.string()
    .matches(/^\+?[0-9]{1,3}-?[0-9]/, 'Invalid number')
    .required('This is required!')
    .min(6, 'Too Short!')
    .max(20, 'Too Long!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        const enteredName = values.name;
        if (
          contacts.some(
            contact => contact.name.toLowerCase() === enteredName.toLowerCase()
          )
        ) {
          alert(`${enteredName} вже є в каталозі`);
          return;
        }
        dispatch(addContact({ id: nanoid(), ...values }));
        resetForm();
      }}
    >
      <StyledForm>
        <label>
          <StyledFild name="name" placeholder="entert name here" />
          <ErrorMessage name="name" />
        </label>
        <label>
          <StyledFild name="number" placeholder="entert number here" />
          <ErrorMessage name="number" />
        </label>
        <AddButton type="submit">add contact</AddButton>
      </StyledForm>
    </Formik>
  );
};
