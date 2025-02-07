import React from "react";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <div className="relative h-full flex items-center justify-center mb-20">
      <img
        src="../../src/assets/imgHarsh.png"
        alt="Harsh Pratik"
        className="max-h-[500px] w-auto sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  );
};

export default HeroPic;
