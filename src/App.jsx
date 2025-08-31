import React from "react";
import SignInSignUp from "./components/SignInSignUp";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <SignInSignUp />
      <Toaster
        position="top-center"
        toastOptions={{
          className: "font-sans rounded-2xl shadow-lg",

          success: {
            className:
              "bg-gradient-to-r from-green-400 to-green-600 text-white",

            iconTheme: {
              primary: "#10B981",
              secondary: "white",
            },
          },

          error: {
            className: "bg-gradient-to-r from-red-500 to-red-600 text-white",
            iconTheme: {
              primary: "#EF4444",
              secondary: "white",
            },
          },
        }}
      />
    </div>
  );
};

export default App;
