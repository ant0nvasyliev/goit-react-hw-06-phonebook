import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
background-color: tomato; 
display: flex;
flex-direction: column;
gap: 20px;
margin: 20px auto;
width: 300px;
height: 120px;
padding: 60px;
border-radius: 10px;
`;

export const StyledFild = styled(Field)`
padding: 4px;
border-radius: 4px; 
text-align: center;
`;

export const AddButton = styled.button`
border-radius: 4px;
width: 100px;
padding: 6px;
cursor: pointer;
color: grey;
`;
