import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const getdataById = async () => {
    const response = await axios.get(`http://localhost:8080/solutions/${id}`);
    setData(response.data);
  };

  useEffect(() => {
    getdataById();
  }, []);

  return (
    <div id="details">
       <Helmet>
        <meta charSet="utf-8" />
        <title>{data.name}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container">
        <div className="details">
          <div className="img">
            <img src={data.image} alt="" />
          </div>
          <div className="about">
            <h1>{data.name}</h1>
            <p>{data.title}</p>
            <p>{data.price}</p>
            <div className="btn">
              <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
