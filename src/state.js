import { atom } from "recoil";

const getUserFromLocalStorage = () => {
  const userJson = localStorage.getItem('user');
  return userJson ? JSON.parse(userJson) : null;
};

export const userState = atom({
  key: "user",
  default: getUserFromLocalStorage(),
});
