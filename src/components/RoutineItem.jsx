import React from "react";
import RoundedButton from "./RoundedButton";

const RoutineItem = ({id,  name, times, done, onSetDone}) => {
  const nameLength = name.split(' ').length;
  return (
    <li className="me-4" key={id} >
      <RoundedButton
      borderColor={done
        ? "border-gray-300 cursor-not-allowed"
        : "border-blue-400"}
      bgColor={'bg-white'}
      onClick={onSetDone}
      >
        <p className="text-3xl text-gray-700">{times}</p>
          <p
            className={`text-sm whitespace-nowrap text-gray-400 ${nameLength>1 && 'animate-slide'}`}
            style={{ animationDuration: `${nameLength*2000}ms` }}
          >
            {name}
          </p>
      </RoundedButton>
    </li>
  );
};

export default RoutineItem;
