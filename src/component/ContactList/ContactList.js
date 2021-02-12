import React, {useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import ContactListItem from "../ContactListItem/ContactListItem";
import ContactListStyled from "../ContactList/ContactListStyled";
import { getContactOperation } from "../../redux/operations/contactOperations";
import { getFilter, getFilteredContacts } from "../../redux/selectors/formSelectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(getContactOperation())
    // eslint-disable-next-line
  }, []);

  
  return (
    <ContactListStyled>
      <TransitionGroup component="ul" className="contact-list">
        {contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((contact) => (
            <CSSTransition
              key={contact.id}
              timeout={250}
              classNames="my-contact-list-item"
            >
              <ContactListItem contact={contact} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </ContactListStyled>
  );
};

export default ContactList;
