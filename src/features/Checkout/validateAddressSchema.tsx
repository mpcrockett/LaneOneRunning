import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

export const validateAddressSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "First name too short.")
    .max(50, "Input cannot be longer than 50 characters.")
    .required("First name is required."),
  last_name: Yup.string()
    .min(2, "Last name too short.")
    .max(50, "Input cannot be longer than 50 characters.")
    .required("Last name is required."),
  street_address_one: Yup.string()
    .min(2, "Last name too short.")
    .max(50, "Input cannot be longer than 50 characters.")
    .required("Address is required."),
  street_address_two: Yup.string()
    .min(2)
    .max(50, "Input cannot be longer than 50 characters."),
  city: Yup.string()
    .min(2)
    .max(50, "Input cannot be longer than 50 characters.")
    .required("City is required."),
  state: Yup.string()
    .min(2)
    .max(2, "Please format state using 2 letters.")
    .required("State is required"),
  zipcode: Yup.string()
    .min(5)
    .max(9, "Zipcode cannot be longer than 50 characters.")
    .required("Zipcode is required."),
});
