import React from "react";



function ContactItem({ fullName, email, avatar, phone }) {
  return (
    <div className="contact-item">
      <img  width={200} src={avatar} alt="" />
      <h1>{fullName}</h1>
      <h2>{phone}</h2>
      <h5>{email}</h5>
    </div>
  );
}

export default ContactItem;
