import React from "react";

function Card({ username = "AR", posts = "not devloper" }) {
  //   console.log(props);
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img
        className="w-48 h-48 md:rounded-none rounded-full mx-auto"
        src="https://images.pexels.com/photos/19758704/pexels-photo-19758704/free-photo-of-winter-morning-landscape-with-a-bridge-over-a-river.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{username}</div>
          <div className="text-slate-700 dark:text-slate-500">{posts}</div>
        </figcaption>
      </div>
    </figure>
    // <div>
    //   <img
    //     src="https://images.pexels.com/photos/26382040/pexels-photo-26382040/free-photo-of-gemsbrok-antelope-in-nature.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    //     alt=""
    //   />
    //   <h1 className="text-2xl bg-green-500 rounded p-2">My card photo</h1>
    // </div>
  );
}

export default Card;
