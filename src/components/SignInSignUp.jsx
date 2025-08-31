import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";
import Button from "./Button";

const LoginSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .required("Required")
    .matches(
      /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/,
      "Name can only contain letters and spaces"
    ),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

const initialValues = { name: "", email: "", password: "" };

const SignInSignUp = () => {
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();
  const nameFieldId = useId();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(register(values)).unwrap();

      toast.success("Registration successful! You can now log in.");
      actions.resetForm();
    } catch (error) {
      toast.error(`Registration failed: ${error}`);
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
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}
            className="mt-8 space-y-5 perspective-1000"
          >
            <Form className="group flex flex-col gap-2" autoComplete="off">
              <label htmlFor="nameFieldId" className="text-blue-200 px-2 ">
                Name
              </label>
              <Field
                type="text"
                name="name"
                id={nameFieldId}
                className="w-full p-4 bg-blue-900/30 rounded-xl border border-blue-700/50 text-white outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent transition-all "
                placeholder="John Doe"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-400 text-sm mt-2"
              />
              <label htmlFor="emailFieldId" className="text-blue-200 px-2 ">
                Email
              </label>
              <Field
                type="email"
                name="email"
                id={emailFieldId}
                className="w-full p-4 bg-blue-900/30 rounded-xl border border-blue-700/50 text-white outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent transition-all "
                placeholder="you@example.com"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-400 text-sm mt-2"
              />
              <label htmlFor="passwordFieldId" className="text-blue-200 px-2 ">
                Password
              </label>
              <Field
                type="password"
                name="password"
                id={passwordFieldId}
                className="w-full p-4 bg-blue-900/30 rounded-xl border border-blue-700/50 text-white outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-transparent transition-all "
                placeholder="••••••••"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-400 text-sm mt-2"
              />
              <Button type="submit">
                <span className="relative z-10 pointer-events-none">
                  Create Account
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none "></span>
              </Button>
              <p className="mt-8 text-blue-200/80 text-center">
                Already have an account?
                <span className="text-sky-300 font-bold cursor-pointer hover:text-sky-400 ml-1 transition-colors">
                  Sign in
                </span>
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
