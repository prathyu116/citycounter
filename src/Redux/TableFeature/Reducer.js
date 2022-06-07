import { ADD_DATA, EDIT_DATA, SORT } from "./Action";
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
    case SORT:
            return { ...store, datas: [...store.datas].sort((a, b) => (a[action.payload] > b[action.payload] ? 1 : b[action.payload] > a[action.payload] ? -1 : 0)) };

    default:
      return store;
  }
};

//replit.com/@PrathyuPrasad/BowedHoarseStacks#index.js
// https: var arr = [
//   { id: 1, country: "Indonesia", city: "Plandirejo", population: 745994 },
//   { id: 2, country: "Madagascar", city: "Manakara", population: 180062 },
//   { id: 3, country: "Azerbaijan", city: "Verkhniy Dashkesan", population: 7303715 },
//   { id: 4, country: "Portugal", city: "Vilarinho da Castanheira", population: 9574652 },
//   { id: 5, country: "Czech Republic", city: "Stará Paka", population: 6064833 },
// ];
// arr.sort((a, b) => {
//   if (a.country < b.country) {
//     return -1;
//   }
//   if (a.country > b.country) {
//     return 1;
//   }
//   return 0;
// });
// console.log(arr);