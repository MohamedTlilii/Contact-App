import React, { useState } from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import { Form } from "semantic-ui-react";
import { addContact } from "../redux/actions";
import { useDispatch } from "react-redux";

function ContactList() {
  const dispatch = useDispatch();
  const [newContact, setNewContact] = useState({});
  const contacts = useSelector((state) => state.contacts);
  // console.log(contacts)
  return (
    <div className="contacts-list">
      <h1>My Contacts</h1>
      <Form
        className="add-contact-form"
        onChange={(e) => {
          setNewContact({ ...newContact, [e.target.name]: e.target.value });
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid placeholder="Full name" name="fullName" />
          <Form.Input fluid placeholder="Phone number" name="phone" />
          <Form.Input fluid placeholder="Email" name="email" />
          <Form.Input fluid placeholder="Image" name="avatar" />
        </Form.Group>
        <Form.Button
          onClick={() => {
            dispatch(addContact(newContact));
          }}
        >
          Save
        </Form.Button>
      </Form>
      <div className="contacts">
        {contacts.map((contact) => (
          <ContactItem {...contact} key={contact.id} />
        ))}
      </div>
    </div>
  );
}

export default ContactList;
