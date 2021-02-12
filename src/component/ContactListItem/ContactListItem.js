import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/actions/formActions";

import { deleteContactOperation } from "../../redux/operations/contactOperations";
import { getFilter, getFilteredContacts } from "../../redux/selectors/formSelectors";

const ContactListItem = ({ contact}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter)

  const onHandleDelete = (event) => {
    const { id } = event.target.dataset;
    dispatch(deleteContactOperation(id))
    
     if (contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())).length < 2) {
       dispatch(setFilter(''));
    }
  }

  return (
    <>
      <li className="contact-list__item" key={contact.id}>
        <div className="contact-list__item-info">
        <span className="contact-list__item-name">{contact.name}:</span>
        <span className="contact-list__item-number">{contact.number}</span>
        </div>
        <button
          type="button"
          data-id={contact.id}
          onClick={onHandleDelete}
          className="contact-list__item-btn"
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default ContactListItem;