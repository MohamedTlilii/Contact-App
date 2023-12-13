import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addFav, removeFav, editContact } from "../redux/actions";

function ContactItem({ fullName, email, avatar, phone, isFav, id }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [editedContact, setEditedContact] = useState();

  const handleEdit = () => {
    setShow(!show);
  };
  const handleSave = () => {
    setShow(!show);
    dispatch(editContact({ id, editedContact }));
  };
  return (
    <div
      className="contact-item"
      style={
        isFav
          ? {
              backgroundColor: "#d01919",
              color: "white",
            }
          : { backgroundColor: "rgb(251,244,231)" }
      }
    >
      {show ? (
        <Form
          className="form-edit"
          onChange={(e) => {
            setEditedContact({
              ...editedContact,
              [e.target.name]: e.target.value,
            });
          }}
        >
          <Form.Input fluid placeholder="Full name" name="fullName" />
          <Form.Input fluid placeholder="Phone number" name="phone" />
          <Form.Input fluid placeholder="Email" name="email" />
          <Form.Input fluid placeholder="Image" name="avatar" />
          <div style={{ display: "flex" }}>
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
              color="red"
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
        </div>
      )}
    </div>
  );
}

export default ContactItem;
