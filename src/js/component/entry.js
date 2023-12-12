import React, { useState } from "react";

function Entry(params) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [cards, setCards] = useState([]);

  const handleClick = () => {
    if (name && age) {
      let newCard = { name, age };
      setCards((prevCards) => [...prevCards, newCard]);
      setName("");
      setAge("");
    } else {
      alert("Write your info");
    }
  };

  return (
    <div className="row w-50 d-flex rounded justify-content-center mx-auto bg-black text-white">
      <h1>COMPLETE SENTENCE</h1>

      <div className="formulario">
        <p>
          Write here your name:
          <input
            className="rounded p-1 text-danger w-25"
            placeholder="Your name.."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </p>
        <p>
          Write here your age:
          <input
            className="rounded p-1 text-danger w-25"
            placeholder="Your age.."
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </p>
        <button className="rounded p-1 w-25" onClick={handleClick}>
          Submit
        </button>
      </div>

      <div className="card text-black mt-5 w-50">
        {cards.map((card, index) => (
          <div>
            <p>{card.name}</p>
            <p>{card.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Entry;
