import { React } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import ContactForm from "../../component/ContactForm/ContactForm"
import Filter from "../../component/Filter/Filter"
import ContactList from "../../component/ContactList/ContactList"
import ContactStyled from '../../component/App/AppStyled';
import { getContacts } from "../../redux/selectors/formSelectors";

const ContactPage = () => {
    const contacts = useSelector(getContacts)
    
    return (
                <ContactStyled>
            
        <CSSTransition in={true} timeout={500} appear={true} classNames="phonebook">
            <h2 className="phbook-title">PhoneBook</h2>
        </CSSTransition>
            
            <ContactForm />
            
            <h2 className="contacts-title">Contacts</h2>
            
        <CSSTransition in={contacts.length > 1} timeout={250} appear={true} classNames="filter" unmountOnExit>
            <Filter />
        </CSSTransition>
            
        <ContactList />
      </ContactStyled>
    );
    
}

export default ContactPage;