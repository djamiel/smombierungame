import React from "react";
import { Link } from "react-router-dom";
import zombies from "./assets/8-su0xkgt8SUz0bR3.png";

export default function Room() {
  return (
    <main className="w-[100vw] flex items-center bg-[#15293D] flex-col min-h-[100vh]">
      <div className="w-[90%] flex justify-center relative bg-[#519be5] h-16 items-center top-6 rounded-md drop-shadow-md">
        <h1 className="text-white text-3xl drop-shadow-md relative">
          smombierun
        </h1>
      </div>
      <img
        src={zombies}
        alt=""
        className="relative top-12 w-[90%] rounded-md h-[30%] object-cover"
      />
      <p className="relative text-white p-6 leading-6 text-l text-left top-16">
        Enter your code here:
      </p>
      <div className="relative w-[90%] bg-[#0C1823] rounded-md  top-12">
        <h1 className="relative text-white p-6 leading-6 text-4xl text-left flex justify-center tracking-widest drop-shadow-md">
          #81267496
        </h1>
      </div>
      <div className="relative w-[90%] top-10 bg-[#285179] rounded-md top-16">
        <p className="relative text-white p-6 leading-6 text-l text-left">
          After entering the code you will get to a waiting screen until the
          game starts. Do not exit the app whilst playing.
        </p>
      </div>
      <Link
        to="/wating"
        className="w-[90%] flex justify-center bg-[#3FBB3E] h-16 items-center top-20 rounded-md drop-shadow-md relative mb-28"
      >
        <h1 className="text-white text-3xl drop-shadow-md">Confirm!</h1>
      </Link>
    </main>
  );
}
