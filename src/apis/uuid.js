import { instance } from "./instance";
import Cookies from "js-cookie";

export const getUUID = async (username) => {
  try {
    const response = await instance.get(`/user/uuid/${username}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
      },
    });

    const uuid = response.data.uuid;
    if (uuid) {
      // 받은 UUID를 쿠키에 저장
      Cookies.set("uuid", uuid, {
        path: "/",
        secure: true,
        sameSite: "Strict",
      });
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};
