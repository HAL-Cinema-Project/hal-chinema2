import { CreateUser } from "../../../../mock/types/user";
import {  apiDelete, apiGet, apiPost,  } from "../../../../util/apiClient";

export const url = "http://localhost:8014/users";

export const createUser = async ( data:CreateUser ) => {
  try {
    const res = await apiPost(url, data);
    return res;
  } catch (error) {
    console.error("user service error: " + error);
  }
};

export const getUser = async () => {
  try {
    const res = await apiGet(url);
    return res;
  } catch (error) {
    console.error("user service error: " + error);
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const res = await apiDelete(url + `/${userId}`);
    return res;
  } catch (error) {
    console.error("user service error: " + error);
  }
};