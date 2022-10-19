import React, { useState, useMemo } from "react";

const Memo = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log("file:Memo.js -line 12 -countNumber --num ", num);
    for (let i = 0; i <= 100000000; i++) {
      return num;
    }
  };


  const checkData = useMemo(() => {
    return countNumber(myNum);
  },[myNum]);
  

  return (
    <>
    <div className="container">
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p> My number : {checkData} </p>
      <button onClick={() => setShow(!show)} style={{ backgroundColor: "grey" ,width:"120px" }}>
        {show ? "You clicked me" : "Click  me plz"}
      </button>
     </div> 
    </>
  );
};

export default Memo;
