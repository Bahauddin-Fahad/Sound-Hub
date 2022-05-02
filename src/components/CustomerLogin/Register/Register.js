import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import Reload from "../../Shared/Reload/Reload";
import auth from "../../../firebase.init";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passRef = useRef("");
  const confirmPassRef = useRef("");
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleRegister = async (e) => {
    e.preventDefault();
    // const name = nameRef.current.value;
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    const confirmPass = confirmPassRef.current.value;
    const passMatchError = document.getElementById("pass-match-error");
    if (pass === confirmPass) {
      await createUserWithEmailAndPassword(email, pass);
      navigate("/home");
      passMatchError.classList.add("hidden");
      passMatchError.classList.remove("block");
    } else {
      passMatchError.classList.add("block");
      passMatchError.classList.remove("hidden");
    }
  };

  if (user) {
    navigate("/home");
  }

  if (loading) {
    return <Reload />;
  }

  return (
    <div className="mb-10">
      <h2 className="text-center m-3 font-mono font-bold">Register Form</h2>
      <Form
        onSubmit={handleRegister}
        className="mx-auto w-full sm:w-96 md:w-96 border-2 p-4 rounded-md"
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter your Name"
            required
          />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            ref={confirmPassRef}
            type="password"
            placeholder="Confirm Your Password"
            required
          />
        </Form.Group>
        {
          <p id="pass-match-error" className="text-red-600 font-medium hidden">
            Password didn't Match,Try again.
          </p>
        }
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setAgree(!agree)}
            className={agree ? " text-green-700" : " text-gray-400"}
            type="checkbox"
            name="terms"
            label="Accept Terms and Conditions"
          />
        </Form.Group>
        <Button
          id="create-account"
          variant="dark"
          type="submit"
          disabled={!agree}
        >
          Create Account
        </Button>
        <p>
          Already have an Account?
          <Link className="ml-2 decoration-transparent" to="/login">
            Log In Here
          </Link>
        </p>
        <SocialLogin />
      </Form>
    </div>
  );
};

export default Register;
