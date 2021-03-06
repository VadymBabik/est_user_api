import { fetchHttp } from "../users/operations";
import { processSave, saveEditUser } from "./action_creator";
import { fetchUsers } from "../users/action_creator";

export const saveEditUsers = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch(processSave());
      await fetchHttp(`/users/${id}`, "put", data);
      dispatch(fetchUsers(await fetchHttp("/users")));
      dispatch(saveEditUser());
    } catch (error) {
      throw error.message;
    }
  };
};
export const removeUsers = (id) => {
  return async (dispatch) => {
    try {
      const data = await fetchHttp(`/users/${id}`, "delete");
      dispatch(fetchUsers(data));
    } catch (error) {
      throw error.message;
    }
  };
};
export const createNewUsers = (data) => {
  return async (dispatch) => {
    try {
      const dd = await fetchHttp(`/users`, "post", data);
      console.log(dd);
      dispatch(fetchUsers(await fetchHttp("/users")));
      dispatch(saveEditUser());
    } catch (error) {
      throw error;
    }
  };
};
