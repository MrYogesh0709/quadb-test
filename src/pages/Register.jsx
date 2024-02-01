import { Form, Link, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { FormRow, SubmitBtn } from "../components";
import logo from "../assets/logo-no-background.svg";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    localStorage.setItem("user", JSON.stringify(data));
    toast.success("Registration successful");
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  return (
    <div className="container mt-5">
      <Form method="post" className="col-md-6 offset-md-3">
        <Link to="/" className="d-flex justify-content-center">
          <img src={logo} alt="logo" width={150} height={150} />
        </Link>
        <FormRow type="text" name="name" labelText="First Name" />
        <FormRow type="text" name="lastName" labelText="Last Name" />
        <FormRow type="email" name="email" labelText="Email" />
        <FormRow type="password" name="password" labelText="Password" />
        <SubmitBtn className="btn btn-primary mt-3" />
        <p className="mt-3 d-flex align-items-center justify-content-center">
          Already a member?
          <Link to="/login" className="btn btn-link">
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
