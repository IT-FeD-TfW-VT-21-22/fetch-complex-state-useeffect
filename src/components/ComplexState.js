import { useState } from "react";
import NameTag from "./NameTag";

const initNames = [
  { firstName: "Helena", lastName: "Johansson" },
  { firstName: "Johan", lastName: "Andersson" },
  { firstName: "Sara", lastName: "Jansson" },
  { firstName: "Janne", lastName: "Jannesson" },
  { firstName: "Nisse", lastName: "Jannesson" },
];

const ComplexState = () => {
  const [names, setNames] = useState(initNames);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Complex State in React</h1>
      {names.map((p, i) => {
        return (
          <NameTag key={i} firstName={p.firstName} lastName={p.lastName} />
        );
      })}
    </div>
  );
};

export default ComplexState;
