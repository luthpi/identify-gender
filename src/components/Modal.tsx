import React from "react";

export default function Modal(props: object): React.FC {
  if(props.name && props.type) {
    return (
    <div className="flex z-50 backdrop-blur-sm fixed inset-0 w-screen h-screen bg-transparent justify-center items-start px-4 py-[80px] animate__animated animate__fadeInDown animate__faster">
      <div className="bg-blue-500 py-2 px-4 rounded-xl min-w-[50%] h-fit text-white flex flex-col gap-2 shadow-lg absolute">
        <div>
          <h3>Name : </h3>
          <span className="font-bold text-2xl">{props.name}</span>
        </div>
        <div>
          <h3>{props.type} : </h3>
          {props.type == "Gender" && <span className="font-bold text-2xl">{props.data}</span>}
        </div>
        <p className="text-sm mt-2">
          API by{" "}
          <a href="https://genderize.io" className="underline text-blue-100">
            Genderize
          </a>
        </p>
      </div>
    </div>
  );
  } else {
    return null
  }
}
