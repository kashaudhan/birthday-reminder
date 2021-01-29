import React, { useState } from "react";

const List = ({ data }) => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople(() => {
      let newPeopel = people.filter((person) => person.id !== id);
      return newPeopel;
    });
  };

  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className="person" key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <button className="remove" onClick={() => removeItem(id)}>
                remove
              </button>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
