import React from "react";
import { Button } from "semantic-ui-react";

function ContactItem({ fullName, email, avatar, phone, isFav }) {
  return (
    <div className="contact-item">
      <img width={200} src={avatar} alt="" />
      <h1>{fullName}</h1>
      <h2>{phone}</h2>
      <h5>{email}</h5>
      {isFav ?(
      <Button color="gray" content="UnFav" icon="close" />
  ):(
      <Button color="red" content="Fav" icon="heart" />
    )}
    </div>
  );
}

export default ContactItem;
