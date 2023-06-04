import React from "react";
import { useFormik } from "formik";
import { Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addArticle } from "../store/articlesSlice";
import CustomInput from "./CustomInput";

const AddArticle = () => {
  const dispatch = useDispatch();
  const uid = uuidv4();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      author: "",
      urlToImage: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(
        addArticle({
          id: uid,
          title: values.title,
          description: values.description,
          author: values.author,
          urlToImage: values.urlToImage,
        })
      );
      resetForm();
    },
  });

  return (
    <form
      className="d-flex justify-content-center align-items-center m-3"
      onSubmit={formik.handleSubmit}
    >
      <Row
        lg={5}
        md={5}
        xs={1}
        className="d-flex justify-content-center align-items-center m-3 w-75"
      >
        <CustomInput
          inputLabel="Title"
          inputName="title"
          inputValue={formik.values.title}
          handleInputChange={formik.handleChange}
        />
        <CustomInput
          inputLabel="Description"
          inputName="description"
          inputValue={formik.values.description}
          handleInputChange={formik.handleChange}
        />
        <CustomInput
          inputLabel="Author"
          inputName="author"
          inputValue={formik.values.author}
          handleInputChange={formik.handleChange}
        />
        <CustomInput
          inputLabel="Image Url"
          inputName="urlToImage"
          inputValue={formik.values.urlToImage}
          handleInputChange={formik.handleChange}
        />

        <Button
          type="submit"
          className="btn btn-sm mt-4 p-2 button"
          disabled={
            !formik.values.title &&
            !formik.values.description &&
            !formik.values.author
          }
        >
          Add Article
        </Button>
      </Row>
    </form>
  );
};

export default AddArticle;
