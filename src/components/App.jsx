import { useEffect, useRef } from 'react';
import { FormAddContacts } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { dellContact, getStorage } from 'store/contactsSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const firstRender = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      dispatch(getStorage(JSON.parse(storedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteContact = e => {
    dispatch(dellContact(e.target.id));
  };

  const arreyContactsFiltered = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.trim().toLowerCase())
    );

  return (
    <div className="maine_box">
      <h1 className="h1 mt-2">Phonebook</h1>
      <FormAddContacts />
      <h2 className="h2 mt-3">Contacts</h2>
      <Filter />
      <ContactsList
        array={arreyContactsFiltered()}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
