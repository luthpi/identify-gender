import React, { useState } from "react";
import Modal from "../components/Modal";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import "./css/pages.css";
import "animate.css";

export default function Identify(): React.FC {
  const [input, setInput] = useState("");
  const [modal, setModal] = useState(false);

  const handleInputChange = (e: object) => {
    const value = e.target.value;
    setInput(value);
  };

  interface IApi {
    name: string;
    gender: string;
  }

  const apiSkeleton: IApi = {
    name: "",
    gender: "",
  };

  const [api, setApi] = useState(apiSkeleton);

  const handle = () => setModal(!modal);

  function containsWhitespace(str) {
    return str.includes(" ");
  }

  const findOut = () => {
    if (containsWhitespace(input)) {
      const data = {
        name: "Name shouldn't contain space",
        gender: null,
      };
      setApi(data);
    } else {
      fetch(`https://api.genderize.io?name=${input}`)
        .then<IApi>((res) => res.json())
        .then((data) => setApi(data));
    }
    handle();
  };

  return (
    <main>
      <h1>By Gender.</h1>
      <div className="inputWrap">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Input a name"
        />
        <button onClick={findOut}>
          <HiMagnifyingGlass />
        </button>
      </div>

      {modal ? (
        <>
          <Modal name={api.name} type="Gender" data={api.gender} />
          {api.name ? (
            <button
              onClick={handle}
              className="w-[40px] h-[40px] rounded-full bg-blue-500 text-6xl fixed top-[30px] z-[99] flex items-center justify-center animate__animated animate__fadeInDown animate__faster"
            >
              <AiOutlineClose />
            </button>
          ) : null}
        </>
      ) : (
        ""
      )}
    </main>
  );
}
