import { ADD_DATA, EDIT_DATA } from "./Action";
import { DELETE_DATA } from "./Action";
const init = { datas: [] };

export const TableReducer = (store = init, action) => {
  console.log(action.payload, "ppppppp");

  switch (action.type) {
    case ADD_DATA:
      return { ...store, datas: action.payload };
    case DELETE_DATA:
      return { ...store, datas: store.datas.filter((el) => el.id !== action.payload) };
    case EDIT_DATA:
      const newState = { ...store };
      const TableData = newState.datas.find((data) => data.id === action.id);
      TableData.country = action.data.country;
      TableData.city = action.data.city;
      TableData.population = action.data.population;
      return newState;
    default:
      return store;
  }
};
