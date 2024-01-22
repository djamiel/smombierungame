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
      <h1 className="relative top-16 text-6xl text-[#FE4E69]">
        ready yourselfs up!
      </h1>
      <p className="relative text-white p-6 leading-6 text-l text-left top-24">
        The run starts in:
      </p>
      <div className="relative w-[90%] bg-[#0C1823] rounded-md  top-20">
        <h1 className="relative text-white p-6 leading-6 text-4xl text-left flex justify-center tracking-widest drop-shadow-md">
          00:03:16
        </h1>
      </div>
      <div className="relative w-[90%] bg-[#285179] rounded-md top-24">
        <p className="relative text-white p-6 leading-6 text-l text-left">
          In the meantime you can play a demo of a minigame that you could get
          whilst running.
          <br></br>
          <br></br>
          But keep attention to when the race starts!
        </p>
      </div>
      <Link
        to="/app"
        className="w-[90%] flex justify-center bg-[#3FBB3E] h-16 items-center top-28 rounded-md drop-shadow-md relative mb-36"
      >
        <h1 className="text-white text-3xl drop-shadow-md">minigame demo</h1>
      </Link>
    </main>
  );
}
