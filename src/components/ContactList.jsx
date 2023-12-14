import React, { useState } from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import { Form, Button } from "semantic-ui-react";
import { addContact, showFav } from "../redux/actions";
import { useDispatch } from "react-redux";

function ContactList() {
  const dispatch = useDispatch();
  const [newContact, setNewContact] = useState({});
  const [showFav, setShowFav] = useState(false);
  const [showNotFav, setShowNotFav] = useState(false);
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

      <div style={{ display: "flex", marginBottom: "70px" }}>
        <Button
          onClick={() => {
            setShowFav(true);
            setShowNotFav(false);
          }}
        >
          Show Fav
        </Button>
        <Button
          onClick={() => {
            setShowNotFav(true);
            setShowFav(false);
          }}
        >
          Show Unlisted
        </Button>
        <Button
          onClick={() => {
            setShowFav(false);
            setShowNotFav(false);
          }}
        >
          Show All
        </Button>
      </div>
      <div className="contacts">
        {contacts
          .reverse()
          .fillter((contact) =>
            showFav ? contact.isFav : showNotFav ? !contact.isFav : contact
          )

          .map((contact) => (
            <ContactItem {...contact} key={contact.id} />
          ))}
      </div>
    </div>
  );
}

export default ContactList;
