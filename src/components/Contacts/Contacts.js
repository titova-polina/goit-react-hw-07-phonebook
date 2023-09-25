import { useDispatch, useSelector } from 'react-redux';
import { Item, Btn } from './Contacts.styled';
import { getFilter, getItems } from 'redux/selectors';
import { deleteContacts } from 'redux/operation';
export const Contacts = () => {
  const contacts = useSelector(getItems);
  const search = useSelector(getFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(
    contact =>
      !search ||
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.number.includes(search)
  );

  return (
    <>
      <ul>
        {visibleContacts.map(contact => (
          <Item key={contact.id}>
            {contact.name}: {contact.number}
            <Btn onClick={() => dispatch(deleteContacts(contact.id))}>
              Delete
            </Btn>
          </Item>
        ))}
      </ul>
    </>
  );
};
