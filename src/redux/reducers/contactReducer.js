import { contacts } from "../../contacts";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  contacts: contacts,
};

const contactReducer = (state = initialState, action) => {
  let { type, payload } = action;
  console.log(payload);
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, { ...payload, id: uuidv4() }],
      };
    case "ADD_FAV":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === payload ? { ...contact, isFav: true } : contact
        ),
      };
    case "REMOVE_FAV":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === payload ? { ...contact, isFav: false } : contact
        ),
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === payload.id
            ? {
                ...contact,
                fullName: payload.editedContact.fullName,
                phone: payload.editedContact.phone,
                avatar: payload.editedContact.avatar,
                email: payload.editedContact.email,
              }
            : contact
        ),
      };

    default:
      return state;
  }
};

export default contactReducer;
