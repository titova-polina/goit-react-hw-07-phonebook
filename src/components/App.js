import { Contacts } from './Contacts/Contacts';
import { GlobalStyle } from './GlobalStyle';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchContacts } from 'redux/operation';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const ref = useRef(false);
  useEffect(() => {
    !ref.current && dispatch(fetchContacts());
    ref.current = true;
  }, [dispatch]);
  return (
    <>
      <section>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <Contacts />
      </section>
      <GlobalStyle />
    </>
  );
};
