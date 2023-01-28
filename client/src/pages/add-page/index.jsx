import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import "./index.scss";
import { postData } from "../../redux/slice/dataSlice";
import { Helmet } from "react-helmet";
import { solutionSchema } from "./schema";
const AddSolutions = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        image: "",
        icon: "",
        name: "",
        title: "",
        price: "",
      },
      validationSchema: solutionSchema,
      onSubmit: (values) => {
        dispatch(postData(values));
        resetForm();
      },
    });
  return (
    <div id="add-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>add solution</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container">
        <div className="add-page">
          <h1>Add Solution</h1>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input">
                <input
                  id="image"
                  name="image"
                  type="text"
                  onChange={handleChange}
                  value={values.image}
                  placeholder="Image Url"
                />
                {errors.image && touched.image && (
                  <p className="error">{errors.image}</p>
                )}
              </div>

              <div className="input">
                <input
                  id="icon"
                  name="icon"
                  type="text"
                  onChange={handleChange}
                  value={values.icon}
                  placeholder="Icon"
                />
                {errors.icon && touched.icon && (
                  <p className="error">{errors.icon}</p>
                )}
              </div>
              <div className="input">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="Name"
                />
                {errors.name && touched.name && (
                  <p className="error">{errors.name}</p>
                )}
              </div>
              <div className="input">
                <textarea
                  id="title"
                  name="title"
                  type="text"
                  onChange={handleChange}
                  value={values.title}
                  placeholder="Title"
                />
                {errors.title && touched.title && (
                  <p className="error">{errors.title}</p>
                )}
              </div>
              <div className="input">
                <input
                  id="price"
                  name="price"
                  type="number"
                  onChange={handleChange}
                  value={values.price}
                  placeholder="Price"
                />
                {errors.price && touched.price && (
                  <p className="error">{errors.price}</p>
                )}
              </div>
              <div className="btn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSolutions;
