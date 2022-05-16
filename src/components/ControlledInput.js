import { useState } from "react";

const ControlledInput = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  // 2
  const [people, setPeople] = useState([]);

  // 2
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("hello world");
    //console.log(firstName, email);
    // add item to the pepoples array

    if (firstName && email) {
      //console.log("Submit the form");
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      // clear input
      setFirstName("");
      setEmail("");
    } else {
      console.log("Empty values");
    }
  };

  return (
    <div>
      <h1>Form</h1>
      <h2>Controlled inputs</h2>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="form-btn" type="submit">
            Add Person
          </button>
        </form>
        <div style={{ marginTop: "10rem" }}>
          {people.map((person, index) => {
            const { id, firstName, email } = person;
            // destructuring
            return (
              <div className="item" key={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ControlledInput;
