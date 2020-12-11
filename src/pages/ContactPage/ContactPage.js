import React from 'react';
import TableLayout from '../../components/TableLayout/TableLayout';
import ContactForm from '../../components/ContactForm/ContactForm';

function ContactPage() {
 return (
  <TableLayout Component={ContactForm}/>
 )
}

export default ContactPage;
