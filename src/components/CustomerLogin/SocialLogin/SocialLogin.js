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
        <div className=" bg-slate-300 h-[2px] w-36"></div>
        <p className="mx-2 mb-0">Or</p>
        <div className=" bg-slate-300 h-[2px] w-36"></div>
      </div>
      {errorElement}
      <div className="flex items-center justify-center mt-4">
        <button
          onClick={() => signInWithGoogle()}
          className="social-login-button flex items-center justify-center mx-auto h-11 w-11 border-[1px] border-gray-400 rounded-full bg-white text-black shadow-md"
        >
          <img className="w-7 " src={googleLogo} alt="" />
        </button>
        <button
          onClick={() => signInWithFacebook()}
          className="social-login-button flex items-center justify-center mx-auto h-11 w-11  border-[1px] border-gray-400 rounded-full bg-blue-700"
        >
          <img className=" w-7 " src={fbLogo} alt="" />
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="social-login-button flex items-center justify-center mx-auto h-11 w-11  border-[1px] border-gray-400 rounded-full bg-gray-800"
        >
          <img className="w-7 " src={gitHubLogo} alt="" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
