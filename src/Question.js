import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="question">
      <header>
        <h4>{props.title}</h4>
        <button className="btn" onClick={() => setShow(!show)}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{show ? `${props.info}` : ""}</p>
    </div>
  );
};

export default Question;
