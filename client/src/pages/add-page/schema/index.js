import * as yup from "yup";

export const solutionSchema = yup.object().shape({
  image: yup.string().required("pleace write image url").url("should be url"),
  icon: yup.string().required("pleace write icon class"),
  name: yup.string().required("pleace write name"),
  title: yup
    .string()
    .required("pleace write title")
    .min(60, "title should be min 60 character"),
  price: yup.number().required("pleace write price"),
});
