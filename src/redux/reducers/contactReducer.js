import { contacts } from "../../contacts";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  contacts: contacts,
};

const contactReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, { ...payload, id: uuidv4() }],
      };

    default:
      return state;
  }
};

export default contactReducer;
