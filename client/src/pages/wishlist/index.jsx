import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/slice/wishlistSlice";
import "./index.scss";
const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <div id="wishlist">
      <Helmet>
        <meta charSet="utf-8" />
        <title>wishlist</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container">
        <div className="wishlist">
          <div className="cards">
            {wishlist.data?.map((element) => {
              return (
                <div key={element._id} className="card">
                  <div className="img">
                    <img src={element.image} alt="" />
                    <div className="info">
                      <p>{element.name}</p>
                      <p>{element.price}</p>
                      <div className="btn">
                        <button
                          onClick={() =>
                            dispatch(removeFromWishlist(element._id))
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
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

export default WishlistPage;
