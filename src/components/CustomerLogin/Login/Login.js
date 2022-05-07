import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Reload from "../../Shared/Reload/Reload";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passRef = useRef("");
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // Password Reset
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading || sending) {
    return <Reload />;
  }

  if (error) {
    errorElement = (
      <p className=" text-red-600 font-medium">Error: {error?.message}</p>
    );
  }
  const handleLogIn = (e) => {
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    e.preventDefault();
    signInWithEmailAndPassword(email, pass);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success(`Email has been sent to ${email}`, { theme: "colored" });
    } else {
      toast.error("Opps!!! Enter your Email First", { theme: "colored" });
    }
  };

  return (
    <div className="pt-10 pb-10 bg-stone-600">
      <Form
        onSubmit={handleLogIn}
        className="mx-auto w-2/4 sm:w-1/3 border-2 p-4 shadow-inner rounded-md bg-white"
      >
        <h2 className="text-center m-3 font-mono font-bold">Login Form</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passRef}
            type="password"
            placeholder="Your Password"
            required
          />
        </Form.Group>
        {errorElement}
        <Button variant="dark" type="submit" className="w-full mb-3">
          Log In
        </Button>
        <p>
          New to Sound Hub?
          <Link
            className="ml-2 decoration-transparent font-semibold"
            to="/register"
          >
            Please Register
          </Link>
        </p>
        <p>
          Forgot Password?
          <Link
            className="ml-2 decoration-transparent font-semibold"
            to=""
            onClick={resetPassword}
          >
            Reset Password
          </Link>
        </p>
        <SocialLogin />
      </Form>
    </div>
  );
};

export default Login;
