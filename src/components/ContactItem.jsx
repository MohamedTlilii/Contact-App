import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addFav, removeFav, editContact } from "../redux/actions";

function ContactItem({ fullName, email, avatar, phone, isFav, id }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [editedContact, setEditedContact] = useState({
    fullName,
    email,
    avatar,
    phone,
  });

  const handleEdit = () => {
    setShow(!show);
  };

  const handleSave = () => {
    setShow(!show);
    dispatch(editContact({ id, editedContact }));
  };
  const handelRemove = () => {};
  return (
    <div
      className="contact-item"
      style={
        isFav
          ? {
              backgroundColor: "#16ab39",
              color: "white",
            }
          : { backgroundColor: "rgb(251,244,231)" }
      }
    >
      {show ? (
        <Form className="form-edit">
          <Form.Input
            fluid
            placeholder="Full name"
            name="fullName"
            value={editedContact.fullName}
            onChange={(e) =>
              setEditedContact({ ...editedContact, fullName: e.target.value })
            }
          />
          <Form.Input
            fluid
            placeholder="Phone number"
            name="phone"
            value={editedContact.phone}
            onChange={(e) =>
              setEditedContact({ ...editedContact, phone: e.target.value })
            }
          />
          <Form.Input
            fluid
            placeholder="Email"
            name="email"
            value={editedContact.email}
            onChange={(e) =>
              setEditedContact({ ...editedContact, email: e.target.value })
            }
          />
          <Form.Input
            fluid
            placeholder="Image"
            name="avatar"
            value={editedContact.avatar}
            onChange={(e) =>
              setEditedContact({ ...editedContact, avatar: e.target.value })
            }
          />
          <div style={{ display: "flex" }}>
            <Form.Button onClick={handleSave}>Save</Form.Button>
            <Form.Button
              onClick={() => {
                setShow(false);
              }}
            >
              Cancel
            </Form.Button>
          </div>
        </Form>
      ) : (
        <div>
          <img width={200} src={avatar} alt="" />
          <h1>{fullName}</h1>
          <h2>{phone}</h2>
          <h5>{email}</h5>

          {isFav ? (
            <Button
              color="gray"
              content="UnFav"
              icon="close"
              onClick={() => {
                dispatch(removeFav(id));
              }}
            />
          ) : (
            <Button
              color="green"
              content="Fav"
              icon="heart"
              onClick={() => {
                dispatch(addFav(id));
              }}
            />
          )}
          <Button
            color="yellow"
            content="Edit"
            icon="pencil alternate"
            onClick={() => {
              handleEdit();
            }}
          />
          <Button
            color="red"
            content="Remove"
            icon="trash"
            onClick={() => {
              handelRemove();
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ContactItem;
