import { instance } from "./instance";

export const getWorks = async () => {
  try {
    const response = await instance.get("/api/works");

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
