import React from "react";
import googleLogo from "../../../Assets/images/logo/google.png";
import fbLogo from "../../../Assets/images/logo/facebook.png";
import gitHubLogo from "../../../Assets/images/logo/github.png";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Reload from "../../Shared/Reload/Reload";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  let errorElement;
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  // Google Sign In
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // Facebook Sign In
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);

  // GitHub Sign In
  const [signInWithGithub, gitHubUser, gitHubLoading, gitHubError] =
    useSignInWithGithub(auth);

  if (googleLoading || fbLoading || gitHubLoading) {
    return <Reload />;
  }

  if (googleError || fbError || gitHubError) {
    errorElement = (
      <p className=" text-red-600 font-medium">
        Error: {googleError?.message}
        {gitHubError?.message} {fbError?.message}
      </p>
    );
  }

  if (googleUser || fbUser || gitHubUser) {
    // navigate("/home");
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className=" bg-slate-300 h-[2px] w-32"></div>
        <p className="mx-2 mb-0">Or</p>
        <div className=" bg-slate-300 h-[2px] w-32"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="flex items-center justify-center mx-auto font-medium  mt-3 border-[1px] border-gray-400 rounded-xl px-6 py-1 w-4/5"
        >
          <img className="w-5 mr-3" src={googleLogo} alt="" />
          Continue With Google
        </button>
        <button
          onClick={() => signInWithFacebook()}
          className="flex items-center justify-center mx-auto mt-3 bg-blue-700 rounded-xl text-white font-medium  border-0 px-6 py-1 w-4/5"
        >
          <img className=" w-5 mr-3" src={fbLogo} alt="" />
          Continue With Facebook
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="flex items-center justify-center mx-auto mt-3 border-0 bg-gray-800 text-white font-medium rounded-xl px-6 py-1 w-4/5"
        >
          <img className="w-5 mr-3" src={gitHubLogo} alt="" />
          Continue With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
