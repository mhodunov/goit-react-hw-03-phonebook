import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const ContactList = ({ filtered, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {filtered.length ? (
        filtered.map(contact => (
          <li 
          className={styles.contactItem}
          key={contact.id}>
              <div>
              <p className={styles.contactName}>{contact.name}</p>
              <p className={styles.contactNumber}>{contact.number}</p>
              </div>
            <button
              className={styles.contactButton}
              onClick={() => {
                onDeleteContact(contact.id);
              }}
            >
              Delete contact
            </button>
          </li>
        ))
      ) : (
        <li className={styles.notification}>Nothing found =(</li>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  filtered: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;