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