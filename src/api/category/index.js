import { AxiosInstance } from "../../util/AxiosInstanse";

export const getAllCategories = async () => {
  const URI = "/categories";

  try {
    const response = await AxiosInstance.get(URI);
    return response;
  } catch (error) {
    throw error;
  }
};