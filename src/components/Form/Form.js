import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { StForm, StField, Error, Btn } from './Form.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contact';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).max(50).required('* Name is required'),
  number: Yup.string()
    .min(6, 'Phone number is too short')
    .max(16, 'Phone number is too long')
    .required('* Enter phone number'),
});

export const Form = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          dispatch(addContact({ ...values, id: nanoid() }));
          actions.resetForm();
        }}
      >
        <StForm>
          <label>
            Name
            <StField type="text" name="name" placeholder="Harry Potter" />
            <Error name="name" component="div" />
          </label>
          <label>
            Number
            <StField type="tel" name="number" placeholder="xxx-xx-xx" />
            <Error name="number" component="div" />
          </label>
          <Btn type="submit">Add contact</Btn>
        </StForm>
      </Formik>
    </>
  );
};
