import React from "react";
import s from "./Contacts.module.css";
import Contacts from "../../components/Contacts/Contacts";

const ContactsPage = () => {
  return (
    <div className={s.contacts}>
      <Contacts />
    </div>
  );
};

export default ContactsPage;
