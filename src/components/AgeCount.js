import { useState } from "react";

const AgeCount = () => {
  const [age, setAge] = useState(22);
  // useState is a function that returns an array
  // first value is a getter, second value is a setter
  // init value is 22 which means age is now the 22

  // function for increasing age
  const handleAgeUp = () => {
    setAge(age + 1);
  };

  // function for decreasing age
  const handleAgeDown = () => {
    setAge(age - 1);
  };

  return (
    <div className="container">
      <h1>React State Example</h1>
      <h2>Age: {age}</h2>
      <button onClick={handleAgeUp}>Age Up</button>
      <button onClick={handleAgeDown}>Age Down</button>
    </div>
  );
};

export default AgeCount;
