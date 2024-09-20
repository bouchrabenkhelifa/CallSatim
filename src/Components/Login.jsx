import React from "react";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import illustration from '../Images/illustration.jpg';

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      

      {/* Login Form Section */}
      <div className="flex flex-col w-full sm:w-[75%] md:w-[60%] lg:w-[50%] xl:w-[45%] justify-center items-center p-8 rounded-lg">
        <div className="flex flex-col items-center mb-6">
          <h1 className="font-bold text-[#334C79] text-2xl mb-2 flex">
            Bienvenue chez <p className="pl-2 text-[#334C79]">Call</p> <p className="text-[#FF0000]">Satim</p>
          </h1>
        </div>

        <div className="flex flex-col items-center w-full max-w-md">
          <div className="w-[90%] space-y-4">
            <input
              type="text"
              className="w-full p-2 my-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              placeholder="Email"
            />
            <input
              type="password"
              className="w-full p-2 my-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              placeholder="Mot de passe"
            />
            <button className="w-full my-3 mt-5 text-white h-10 bg-[#FF0000] rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2">
              Se connecter
            </button>
          </div>
        </div>

        <div className="flex gap-5 py-4">
          <FaApple className="w-6 h-6 text-gray-800 hover:text-gray-600" />
          <FaFacebook className="w-6 h-6 text-blue-600 hover:text-blue-400" />
          <FaGoogle className="w-6 h-6 text-red-600 hover:text-red-400" />
        </div>
      </div>
      <div className="hidden lg:flex flex-1 justify-center items-center p-8 ">
        <img src={illustration} className="w-[70%] h-auto" alt="Illustration" />
      </div>
    </div>
  );
};

export default Login;
