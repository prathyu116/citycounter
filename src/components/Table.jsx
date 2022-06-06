import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getData } from "../Redux/TableFeature/Action";

const Table = ({currentId ,setCurrentId,page}) => {
  const dispatch = useDispatch();

  const state = useSelector((store) => store.TableData.datas);

  useEffect(() => {
    dispatch(getData());
  }, []);


  console.log("sssss", state);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Country</th>
                  <th scope="col">City</th>
                  <th scope="col">Population</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {state.map((data) => {
                  return (
                    <tr key={data.id}>
                      <th scope="row">{data.id}</th>
                      <td>{data.country}</td>
                      <td>{data.city}</td>
                      <td>{data.population}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-success"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          onClick={() => setCurrentId(data.id)}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => {
                            dispatch(deleteData(data.id));
                          }}
                        >
                          Danger
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Table;
