import React from "react";
import { Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addFav, removeFav } from "../redux/actions";

function ContactItem({ fullName, email, avatar, phone, isFav, id }) {
  const dispatch = useDispatch();
  return (
    <div
      className="contact-item"
      style={
        isFav
          ? {
              backgroundColor: "red",
            }
          : { backgroundColor: "rgb(251,244,231)" }
      }
    >
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
    </div>
  );
}

export default ContactItem;
