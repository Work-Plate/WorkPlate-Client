import { instance } from "./instance";

export const getWorks = async (id) => {
  try {
    const endpoint = id ? `/api/works/${id}` : "/api/works";
    const response = await instance.get(endpoint);

    if (response.data.success) {
      console.log(response.data.data);
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
