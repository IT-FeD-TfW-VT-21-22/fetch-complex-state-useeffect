import { useEffect, useState } from "react";

const Greet = ({ name }) => {
  const [state, setState] = useState("");

  const message = `Hello, ${name}`; // calculates output

  // bad example!
  //document.title = `Greetings to ${name}`;

  // good example
  useEffect(() => {
    // side-effect logic
    // runs once after mounting
    document.title = `Greetings to ${name}`; // side-effect
  }, [name]);

  // When dependencies are:

  // 1. Not provided: the side-effect runs after every rendering
  useEffect(() => {
    // runs after EVERY rendering
  });

  // 2. Pass an empty array: side-effect runs once after initial rendering
  useEffect(() => {
    // runs ONCE after initial rendering
  }, []);

  // 3. When it has props and state values: the side-effect runs only
  // when the dependency values changes
  // name is the prop
  useEffect(() => {
    // runs ONCE after initial rendering
    // and after every rendering ONLY IF the prop or state value changes
  }, [name, state]);

  return (
    <div>
      useEffect Hook
      <p>{message}</p>
      {/*calculates ouput*/}
    </div>
  );
};

export default Greet;
