import React from "react";

export default function Card(props) {
  return (
    <div className="bg-blue-800 w-64 flex flex-col items-center py-4 m-2 mt-12 rounded-md shadow-lg hover:scale-105 hover:transition-transform transition-transform delay 100 hover:delay 100 hover:bg-blue-900">
      <img src={props.url} alt="error" className="w-32 h-32"></img>
      <h1 className="text-white text-lg capitalize">{props.name}</h1>
      <p className="text-red-200 text-md mt-12">{`₹ ${props.price}`}</p>
    </div>
  );
}
