import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/operations";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

const initialValues = { email: "", password: "" };

const SignInSignUp = () => {
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(logIn(values)).unwrap();

      toast.success("Login successful! Welcome back.");
      actions.resetForm();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-135 from-blue-950 via-blue-900 to-blue-800 p-8">
      <div className="@container max-w-md w-full p-8 bg-blue-950/30 rounded-2xl shadow-[0_20px_50px_rgba(0,_29,_61,_0.7)] backdrop-blur-xl border border-blue-800/50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl"></div>
        <div className="relative">
          <h2 className="text-3xl font-extrabold text-sky-300 text-center mb-2 tracking-tight">
            Create an Account
          </h2>
          <p className="text-blue-200 text-center mb-8">
            Join our community today
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
