import axios from "axios";
const url = "http://localhost:5000";

//SignUp
export const authenticateSignup = async (user) => {
  try {
    return await axios.post(`${url}/signup`, user);
  } catch (error) {
    console.log("error while calling Signup API: ", error);
  }
};


//Login
export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${url}/login`, user);
  } catch (error) {
    console.log("error while calling Login API: ", error);
  }
};
