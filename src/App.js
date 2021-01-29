import data from "./data";
import List from "./list";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List data={people} />
        <button className="clr-btn" onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
