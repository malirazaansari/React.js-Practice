import React, { useState } from "react";

function BgChanger() {
  const [color, setcolor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen bg-gray-500 duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setcolor("red")}
              style={{ backgroundColor: "red" }}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            >
              Red
            </button>
            <button
              onClick={() => setcolor("green")}
              style={{ backgroundColor: "green" }}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            >
              Green
            </button>
            <button
              onClick={() => setcolor("Yellow")}
              style={{ backgroundColor: "yellow" }}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            >
              Yellow
            </button>
            <button
              onClick={() => setcolor("blue")}
              style={{ backgroundColor: "blue" }}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            >
              Blue
            </button>
            <button
              onClick={() => setcolor("orange")}
              style={{ backgroundColor: "orange" }}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            >
              Orange
            </button>
            <button
              onClick={() => setcolor("brown")}
              style={{ backgroundColor: "brown" }}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            >
              Brown
            </button>
            <button
              onClick={() => setcolor("black")}
              style={{ backgroundColor: "black" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              Black
            </button>
            <button
              onClick={() => setcolor("white")}
              style={{ backgroundColor: "white" }}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            >
              White
            </button>
            <button
              onClick={() => setcolor("gray")}
              style={{ backgroundColor: "gray" }}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            >
              Gray
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BgChanger;
