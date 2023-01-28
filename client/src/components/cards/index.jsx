import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteData, getData } from "../../redux/slice/dataSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/slice/wishlistSlice";
import "./index.scss";
const CardSolutions = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState(true);
  const [card, setCard] = useState(true);
  const solutions = useSelector((state) => state.solutions);
  const wishlist = useSelector((state) => state.wishlist);
  useEffect(() => {
    dispatch(getData(""));
  }, []);
  const handleSort = () => {
    setSort(!sort);

    sort ? dispatch(getData(1)) : dispatch(getData(""));
  };
  return (
    <div id="solutions-card">
      <div className="container">
        <div className="solutions-card">
          <h1>Explore Our Solutions</h1>
          <div className="search-sort">
            <input
              onChange={(e) => dispatch(getData(e.target.value))}
              type="text"
              placeholder="Search..."
            />
            <button onClick={() => handleSort()}>Sort</button>
          </div>
          <div className="cards">
            {solutions.data.map((element) => {
              return (
                <div key={element._id} className="card">
                  <div className="img">
                    <img src={element.image} alt="" />
                    <div className="info">
                      <div className="icon">
                        <i className={element.icon}></i>
                      </div>

                      <Link to={`/details/${element._id}`}>
                        {" "}
                        {element.name}
                      </Link>
                      <p>{element.price}</p>
                    </div>
                  </div>

                  <div className="about">
                  <Link to={`/details/${element._id}`}>
                        {" "}
                        {element.name}
                      </Link>
                    <p>{element.title}</p>
                  </div>
                  <div className="delete-heart">
                    <div className="btn">
                      <button
                        onClick={() =>
                          dispatch(deleteData(element._id)).then(() =>
                            dispatch(getData(""))
                          )
                        }
                      >
                        Delete
                      </button>
                    </div>
                    {wishlist.data.find((elem) => elem._id === element._id) ? (
                      <div
                        onClick={() =>
                          dispatch(removeFromWishlist(element._id))
                        }
                        className="wishlist"
                      >
                        <i className="fa-solid fa-heart"></i>
                      </div>
                    ) : (
                      <div
                        onClick={() => dispatch(addToWishlist(element))}
                        className="wishlist"
                      >
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSolutions;
