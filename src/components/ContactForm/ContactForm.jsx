// import React from "react";
import { Formik, ErrorMessage } from 'formik';
import { StyledForm, StyledFild, AddButton } from './ContactForm.styled'
import * as Yup from 'yup';
import { nanoid } from 'nanoid'

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

export const ContactForm = ({addContact}) => {
   return (
<Formik
   initialValues={{
      name: '',
      number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
         addContact({ ...values, id: nanoid()});
         actions.resetForm();
      }}
      >

      <StyledForm>
         <label>
         <StyledFild name="name" placeholder="entert name here" />
         <ErrorMessage name="name" />
         </label>
         <label >
         <StyledFild name="number" placeholder="entert number here" />
         <ErrorMessage name="number" />
         </label>
         <AddButton type="submit">add contact</AddButton>
      </StyledForm>
</Formik>
   )
}

