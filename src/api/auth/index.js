import axios from "axios";
import { API_BASE_URL } from "../../config/Config"
import { AxiosInstance } from "axios";

export const signin = async (user) => {
  const URL = "/auth/signin";

  try {
    const response = await AxiosInstance.post(URL, user);
    console.log(response);

    return response;
  } catch (error) {
    throw error;
  }
};

// export const signUp = async (user) => {
//   const URL = "/auth/signup";
//   try {
//     const response = await AxiosInstance.post(URL, user);
//     console.log(response);

//     return response;
//   } catch (error) {
//     throw error;
//   }
// };
export const signUp = async (user) => {
  const URL = "/auth/signup";
  try {
    const response = await axios.post(
      `https://ecommce-be.herokuapp.com/ecomm/api/v1${URL}`,
      user
    );
    console.log(response);

    return response;
  } catch (error) {
    throw error;
  }
};