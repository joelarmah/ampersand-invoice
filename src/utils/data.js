import moment from "moment";
import * as Yup from "yup";

const initialFormValues = {
  invoiceNumber: "1",
  invoiceDate: moment().format("DD MM yyyy"),
  company: {
    name: "",
    address: "",
    email:"",
    phone:"",
    city: "",
  },
  customer: {
    name: "",
    address: "",
    email: "",
    phone: "",
    city: "",
  },
  terms: 1,
  items: [],
  note: "Thank you for your order.",
};

const terms = [1, 7, 14, 30];

const validationSchema = Yup.object().shape({
  company: Yup.object().shape({
    name: Yup.string().required("*required"),
    address: Yup.string().required("*required"),
    city: Yup.string().required("*required"),
    email: Yup.string().required("*required"),
   //  phone: Yup.string()
  }),
  customer: Yup.object().shape({
    name: Yup.string().required("*required"),
    address: Yup.string().required("*required"),
    city: Yup.string().required("*required"),
    email: Yup.string().email("Invalid email").required("*required"),
    // phone: Yup.string
  }),
  items: Yup.array()
    .min(1, "An item must be added")
    .of(
      Yup.object().shape({
        itemName: Yup.string().required("*required"),
        qty: Yup.number("").required("*required"),
        price: Yup.number("").required("*required"),
      }),
    ),
});

export { initialFormValues, terms, validationSchema };
