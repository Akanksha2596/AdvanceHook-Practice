import React, { useState, useMemo, useEffect, useCallback } from "react";

const Comparehook = () => {
  const [counter, setCounter] = useState(1);
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);

  //   console.log("useMmeo:", result );
  const [name, setName] = useState("");

  const displayName = useCallback(
    (greeting) => {
      return greeting + " " + name;
    },
    [name]
  );

  //   console.log("useCallback :", displayName);
  return (
    <div>
      <h1>
        Factorial of {counter} is: <span>{result}</span>
      </h1>
      <div>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
      <hr></hr>
      <div>
        <div>
          <label>Enter name</label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <hr></hr>
          <DisplayName displayName={displayName}></DisplayName>
        </div>
      </div>
    </div>
  );
};

const DisplayName = ({ displayName }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(displayName("Hello"));
    console.log("rendered");
  }, [displayName]);
  return <p>{`My name is ${value}`}</p>;
};

function factorial(n) {
  let i = 0; //heavy operation
  while (i < 100000000) i++;
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

export default Comparehook;
