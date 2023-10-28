import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Button from "@mui/material/Button";

export default function Result(): React.FC {
  const navigate = useNavigate();
  const back = () => {
    navigate("/identify");
  };
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const gender = searchParams.get("gender");
  return (
    <div id="res">
      <div className="mb-5">
        <h1>Name : </h1>
        <h2>{name} </h2>
        <h1>Gender : </h1>
        <h2>{gender} </h2>
      </div>
      <Button to="/identify" onClick={back} className="resLink">
        <FaArrowLeft /> Back
      </Button>
    </div>
  );
}
