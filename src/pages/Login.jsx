import { Link, Form, redirect } from "react-router-dom";
import { FormRow, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import logo from "../assets/logo-no-background.svg";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    localStorage.setItem("user", JSON.stringify(data));
    toast.success("Login successful");
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  return (
    <div className="container mt-5">
      <Form method="post" className="col-md-6 offset-md-3">
        <Link to="/" className="d-flex justify-content-center">
          <img src={logo} alt="logo" width={150} height={150} />
        </Link>
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <SubmitBtn />
        <p className="mt-3 d-flex align-items-center justify-content-center">
          Not a member yet?
          <Link to="/register" className="btn btn-link">
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
};
export default Login;
