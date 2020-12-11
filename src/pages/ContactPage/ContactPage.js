import React from 'react';
import TableLayout from '../../components/TableLayout/TableLayout';
import Form from '../../components/ContactForm/ContactForm';
function ContactPage() {
 return (
  <TableLayout Component={Form}/>
 )
}

export default ContactPage;
