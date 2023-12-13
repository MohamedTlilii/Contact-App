import React from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import { Button, Checkbox, Form } from "semantic-ui-react";

function ContactList() {
  const contacts = useSelector((state) => state.contacts);

  return (
    <div className="contacts-list">
      <h1>My Contacts</h1>
      <Form className="add-contact-form">
        <Form.Group widths="equal">
          <Form.Input fluid label="First name" placeholder="First name" />
          <Form.Input fluid label="Last name" placeholder="Last name" />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
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
