import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { editData, getData } from "../Redux/TableFeature/Action";

const Navbar = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ country: "", city: "", population: "" });

  //   const state = useSelector((store) => store.Mytodos.todos);
  const state = useSelector((store) => (currentId ? store.TableData.datas.find((data) => data.id === currentId) : null));

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (state) setPostData(state);
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId === 0) {
      fetch("http://localhost:8080/data", {
        body: JSON.stringify(postData),
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
      })
        .then(() => {
          dispatch(getData());
        })
        .then(() => {
          setCurrentId(0);
          setPostData({ city: "", country: "", population: "" });
        });
    } else {
      // fetch("http://localhost:8080/data", {
      //   body: JSON.stringify(postData),
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   method: "PATCH",
      // })
      //   .then(() => {
      //     dispatch(editData());
      //   })
      //   .then(() => {
      //     setCurrentId(0);
      //     setPostData({ city: "", country: "", population: "" });
      //   });
      dispatch(editData(currentId, postData));
      setCurrentId(0);
      setPostData({ city: "", country: "", population: "" });
    }
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light ">
        <div className="container-fluid justify-content-end">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Add Data
          </button>
        </div>
      </nav>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {currentId ? "Edit data" : " add data"}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <input
                  name="country"
                  onChange={(e) => setPostData({ ...postData, country: e.target.value })}
                  value={postData.country}
                  className="form-control mb-3"
                  type="text"
                  placeholder="Country Name"
                />
                <input
                  onChange={(e) => setPostData({ ...postData, city: e.target.value })}
                  value={postData.city}
                  name="city"
                  className="form-control mb-3"
                  type="text"
                  placeholder="City"
                />
                <input
                  onChange={(e) => setPostData({ ...postData, population: e.target.value })}
                  value={postData.population}
                  name="population"
                  className="form-control mb-3"
                  type="number"
                  placeholder="population"
                />

                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                    Close
                  </button>
                  <input type="submit" className="btn btn-success" data-bs-dismiss="modal" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
