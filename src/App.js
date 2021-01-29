import data from "./data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople(() => {
      let newPeopel = people.filter((p) => p.id !== id);
      return newPeopel;
    });
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <div>
          {people.map((person) => {
            const { id, name, age, image } = person;
            return (
              <article className="person" key={id}>
                <img src={image} alt={name} />
                <div>
                  <h4>{name}</h4>
                  <button className="remove" onClick={() => removePerson(id)}>
                    remove
                  </button>
                  <p>{age} years</p>
                </div>
              </article>
            );
          })}
        </div>
        <button className="clr-btn" onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
