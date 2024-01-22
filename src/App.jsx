import React, { useState, useEffect } from "react";
import moleImage from "./assets/zombie1.png";
import heartYES from "./assets/heartYES.png";
import cracked from "./assets/cracked.png";

import "./App.css";

function App() {
  const [activeHole, setActiveHole] = useState(null);
  const [whacked, setWhacked] = useState(false);

  const holes = Array.from({ length: 6 }, (_, index) => index + 1);

  const randomTime = (min, max) =>
    Math.round(Math.random() * (max - min) + min);

  const randomHole = () => Math.floor(Math.random() * holes.length) + 1;

  const peep = () => {
    const time = randomTime(3000, 3000);
    const hole = randomHole();

    setActiveHole(hole);
    setWhacked(false);

    setTimeout(() => {
      setActiveHole(null);
      setTimeout(() => {
        peep();
      }, 1000);
    }, 1500);
  };

  useEffect(() => {
    peep();
  }, []); // Run on mount

  const whackMole = (hole) => {
    if (hole === activeHole && !whacked) {
      setWhacked(true);
      setTimeout(() => {
        setActiveHole(null);
      }, 500);
    }
  };

  //   return (
  //     <div className="App">
  //       <h1>Whack-a-Mole Game</h1>
  //       <div className="game-container">
  //         {holes.map((hole) => (
  //           <div
  //             key={hole}
  //             className={`hole ${hole === activeHole ? "active" : ""}`}
  //             onClick={() => whackMole(hole)}
  //           >
  //             {hole === activeHole && (
  //               <img
  //                 src={moleImage}
  //                 alt="Mole"
  //                 className="mole"
  //                 onAnimationEnd={() => setActiveHole(null)}
  //               />
  //             )}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  // export default App;

  return (
    <main className="flex h-screen flex-col items-center bg-[#018300]">
      <div className="flex w-11/12 bg-[#E9E9E9] flex-row rounded-md drop-shadow relative top-[2%] h-16 items-center justify-center space-x-2">
        <div className="flex w-2/12 bg-[#15293D] flex-row items-center h-14 rounded-md drop-shadow justify-center space-x-1">
          <h1 className="text-white dropshadow text-4xl">6</h1>
          <h1 className="text-white dropshadow text-2xl">s</h1>
        </div>
        <div className="flex w-4/12 bg-[#15293D] flex-row items-center h-14 rounded-md drop-shadow justify-center">
          <h1 className="text-white dropshadow text-3xl">#7492</h1>
        </div>
        <div className="flex w-5/12 bg-[#15293D] flex-row items-center h-14 rounded-md drop-shadow justify-center">
          <img src={heartYES} alt="" className="relative w-[22%] mx-1" />
          <img src={heartYES} alt="" className="relative w-[22%] mx-1" />
          <img src={heartYES} alt="" className="relative w-[22%] mx-1" />
        </div>
      </div>
      <div className="w-full bg-[#E9E9E9] h-2 relative top-[5%] shadow-inner"></div>
      <div className="w-full relative top-[5%] bg-[#072B4B] h-[70%] flex overflow-hidden justify-center items-center">
        <img
          alt="cracked"
          src={cracked}
          className="object-cover opacity-50 absolute h-[100%]"
        />
        <div className="game-container">
          {holes.map((hole) => (
            <div
              key={hole}
              className={`hole ${hole === activeHole ? "active" : ""}`}
              onClick={() => whackMole(hole)}
            >
              {hole === activeHole && (
                <img
                  src={moleImage}
                  alt="Mole"
                  className={`mole ${whacked ? "whacked" : ""}`}
                  // onAnimationEnd={() => setActiveHole(null)}
                />
              )}
            </div>
          ))}
        </div>

        {/* <div
          id="holeBox"
          className="flex relative w-[100%] h-[100%] flex-wrap justify-center items-center"
        >
          <div
            onclick="whackMole(this)"
            className="flex w-[35vw] h-[35vw] bg-[#04070B] relative rounded-full overflow-hidden m-[5vw] justify-center hole"
          >
            <img
              src="/src/assets/zombie1.png"
              alt="zombie"
              id="zombie1"
              className="zombieImg absolute w-[90%] top-[10%]"
            />
          </div>
          <div
            onclick="whackMole(this)"
            className="flex w-[35vw] h-[35vw] bg-[#04070B] relative rounded-full overflow-hidden m-[5vw] justify-center hole"
          >
            <img
              src="/src/assets/zombie1.png"
              alt="zombie"
              id="zombie2"
              className="zombieImg absolute w-[90%] top-[10%]"
            />
          </div>
          <div
            onclick="whackMole(this)"
            className="flex w-[35vw] h-[35vw] bg-[#04070B] relative rounded-full overflow-hidden m-[5vw] justify-center hole"
          >
            <img
              src="/src/assets/zombie1.png"
              alt="zombie"
              id="zombie3"
              className="zombieImg absolute w-[90%] top-[10%]"
            />
          </div>
          <div
            onclick="whackMole(this)"
            className="flex w-[35vw] h-[35vw] bg-[#04070B] relative rounded-full overflow-hidden m-[5vw] justify-center hole"
          >
            <img
              src="/src/assets/zombie1.png"
              alt="zombie"
              id="zombie4"
              className="zombieImg absolute w-[90%] top-[10%]"
            />
          </div>
          <div
            onclick="whackMole(this)"
            className="flex w-[35vw] h-[35vw] bg-[#04070B] relative rounded-full overflow-hidden m-[5vw] justify-center hole"
          >
            <img
              src="/src/assets/zombie1.png"
              alt="zombie"
              id="zombie5"
              className="zombieImg absolute w-[90%] top-[10%]"
            />
          </div>
          <div
            onclick="whackMole(this)"
            className="flex w-[35vw] h-[35vw] bg-[#04070B] relative rounded-full overflow-hidden m-[5vw] justify-center hole"
          >
            <img
              src="/src/assets/zombie1.png"
              alt="zombie"
              id="zombie6"
              className="zombieImg absolute w-[90%] top-[10%]"
            />
          </div>
        </div> */}
      </div>
      <div className="w-full bg-[#E9E9E9] h-2 relative top-[5%] shadow-inner"></div>
      <h1 className="drop-shadow top-[10%] relative text-3xl text-white">
        Whack the zombies!
      </h1>
    </main>
  );
}

export default App;
