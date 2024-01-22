import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="w-[100vw] flex items-center bg-[#15293D] flex-col min-h-[100vh]">
      <div className="w-[90%] flex justify-center relative bg-[#519be5] h-16 items-center top-6 rounded-md drop-shadow-md">
        <h1 className="text-white text-3xl drop-shadow-md relative">
          smombierun
        </h1>
      </div>
      <div className="relative w-[90%] top-10 bg-[#285179] rounded-md">
        <p className="relative text-white p-6 leading-6 text-l text-left">
          Welcome to the smombierun app. To enter your race through the app you
          have recieved a special code from your run orginiser. On the next
          screen you will have to enter that code to participate. <br></br>
          <br></br>
          You will play many different minigames to keep your mind on the phone!
          You will have 3 lives through the full run. If you lose 1 minigame you
          lose 1 life so stay focussed! When you have lost all your lives you
          are out off the game. Feel free to compleet the run physicaly.
          <br></br>
          <br></br>
          We hope you will have a fun experience and dont forget to keep
          yourself and others safe!
          <br></br>
          <br></br>
          Good luck and have fun!
        </p>
      </div>
      <Link
        to="/room"
        className="w-[90%] flex justify-center bg-[#3FBB3E] h-16 items-center top-14 rounded-md drop-shadow-md relative mb-32"
      >
        <h1 className="text-white text-3xl drop-shadow-md">Understood!</h1>
      </Link>
    </main>
  );
}
