export const addContact = (payload) => {
  return {
    type: "ADD_CONTACT",
    payload,
  };
};
export const addFav =(payload) => {
    return {
        type:"ADD_FAV",
        payload,
    }
}
export const removeFav =(payload) => {
    return {
        type:"REMOVE_FAV",
        payload,
    }
}
export const editContact =(payload) => {
    return {
        type:"EDIT_CONTACT",
        payload,
    }
}
export const removeContact = (payload) => {
    return {
      type: "REMOVE_CONTACT",
      payload,
    };
  };
export const showFav = () => {
    return {
      type: "SHOW_FAV",
    
    };
  };