export const ADD_DATA = "ADD_DATA";
export const DELETE_DATA = "DELETE_TODO";
export const EDIT_DATA = "EDIT_DATA";

export const addData = (data) => {
  return {
    type: ADD_DATA,
    payload: data,
  };
};
export const getData = (page) => async (dispatch) => {
  const data = await fetch(`http://localhost:8080/data?_page=${page}&_limit=5`).then((d) => d.json());
  dispatch(addData(data));
};
export const deleteData = (id) => {
  return {
    type: DELETE_DATA,
    payload: id,
  };
};
export const editData = (id,data) => {
  console.log("D",id,data);
  return {
    type: EDIT_DATA,
    id,
    data
  };
};