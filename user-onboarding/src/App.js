import logo from './logo.svg';
import './App.css';
import Form from './Component/Form'
import { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";


const emptyFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
};
const emptyErrors = {
  name: "",
  email: "",
  password: "",
  terms: "",
};

const schema = yup.object().shape({
  name: yup
      .string()
      .trim()
      .required("Name is required")
      .min(2, "Must be more than 2 characters"),
  email: yup
      .string()
      .email('Your email is invalid. Try again.')
      .required("Email is required"),
  password: yup
      .string()
      .trim()
      .required('Password is required')
      .min(7, 'Must be more than 7 characters for security'),
  termsOfService: yup
      .boolean()
      .oneOf([true], "Please accept the terms and conditions.")
})



function App() {
  const [formValues, setFormValues] = useState(emptyFormValues);
  const [errors, setErrors] = useState(emptyErrors);

  const [newUser, setNewUser] = useState([]);

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    axios
      .post("https://reqres.in/api/users", formValues)
      .then(
        (res) => setNewUser([res.data, ...newUser]),
        setFormValues(emptyFormValues)
      )
      .catch((err) => console.log(err));
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {});
  }, [formValues]);
  return (
    <div className="App">
      <Form
        values={formValues}
        change={handleChange}
        errors={errors}
        submit={handleSubmit}
      />
      <div className="userWrapper">
        {newUser.map((user, idx) => {
          return (
            <div key={idx} className="users">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;