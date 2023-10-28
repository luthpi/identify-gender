import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import "./css/pages.css";
import "animate.css";

export default function Identify(): React.FC {
  const [input, setInput] = useState("");
  const [modal, setModal] = useState(false);
  const navigate = useNavigate()

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

  function containsWhitespace(str) {
    return str.includes(" ");
  }

  const findOut = () => {
    if (containsWhitespace(input)) {
      const data = {
        name: "Name shouldn't contain space",
        gender: null,
      };
      if(data.gender == null) data.gender = "failed to identify"
      
          navigate(`/result?name=${data.name}&gender=${data.gender}`)
    } else if(input) {
      fetch(`https://api.genderize.io?name=${input}`)
        .then<IApi>((res) => res.json())
        .then((data) => {
          if(data.gender == null) data.gender = "failed to identify"
          navigate(`/result?name=${data.name}&gender=${data.gender}`)
        });
    } else {
      const data = {
        name: "invalid",
        gender: null,
      };
      if(data.gender == null) data.gender = "failed to identify"
          navigate(`/result?name=${data.name}&gender=${data.gender}`)
    }
  };

  return (
    <main>
      <h1>Identify.</h1>
      <div className="inputWrap">
        <TextField 
          label="Input a name"
          type="text"
          InputProps={{
            style: {
              borderRadius: "19px",
              padding: "0",
              height: "100%",
            }
          }}
          size="small"
          className="input"
          value={input}
          onChange={handleInputChange}
        />
        <Button onClick={findOut} className="button">
          <HiMagnifyingGlass />
        </Button>
      </div>
    </main>
  );
}
