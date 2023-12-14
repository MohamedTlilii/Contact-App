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
                ...payload.editedContact,
                // backend
              }
            : contact
        ),
      };
    case "REMOVE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
      };
    case "SHOW_FAV":
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.isFav && contact),
      };

    default:
      return state;
  }
};

export default contactReducer;
