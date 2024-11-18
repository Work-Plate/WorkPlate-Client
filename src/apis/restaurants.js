import { instance } from "./instance";

export const getRestaurants = async () => {
  try {
    const response = await instance.get("/api/restaurants");

    if (response.data.success) {
      return response.data.data;
    } else {
      console.error(response.data.message);
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
