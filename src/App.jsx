import React from "react";

const App = () => {
  let count = 1;
  let name = "";
  function updateCount() {
    count = count + 1;
    console.log(`count value is ${count}`);
  }
  function handleInput(e) {
    const value = e.target.value;
    console.log(value);
  }

  return (
    <>
      <div>
        <h2>name is {count}</h2>
        <input type="text" value={name} onChange={handleInput} />
        <button onClick={updateCount}>Update name</button>
        {name}
      </div>
    </>
  );
};

export default App;
