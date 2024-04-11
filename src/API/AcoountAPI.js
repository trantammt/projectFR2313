import { api } from "./api";


// get listAccount API
const getListAccountAPI = () => {
  return api("GET", "listAccount/", null);
};


// Add New Account
const addAccountNewAPI = (AccountNew) => {
  return api("POST", "listAccount/", AccountNew);
};


// Delete Account
const deleteAccountAPI = (id) => {
  let url = "listAccount/" + id;
  return api("DELETE", url, null);
};


// Update Account
const updateAccountAPI = (accountUpdate) => {
  let url = "listAccount/" + accountUpdate.id;
  return api("PUT", url, accountUpdate);
};
export {
  getListAccountAPI,
  addAccountNewAPI,
  deleteAccountAPI,
  updateAccountAPI,
};


