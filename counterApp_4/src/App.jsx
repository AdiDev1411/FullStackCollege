import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const increment = () => {
    console.log("Increment button clicked");
    setCount(count + 1);
  };
  const decrement = () => {
    console.log("Decrement button clicked");
    setCount(count - 1);
  };
  const incrementByFive = () => {
    console.log("Increment by 5 button clicked");
    setCount(count + 5);
  };
  const reset = () => {
    console.log("Reset button clicked");
    setCount(0);
  };

  const firstNameChange = (e) => {
    console.log("First name changed to:", e.target.value);
    setFirstname(e.target.value);
  };

  const lastNameChange = (e) => {
    console.log("Last name changed to:", e.target.value);
    setLastname(e.target.value);
  };

  return (
    <div className="text-center bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-6xl font-bold mb-8 text-blue-400">
        Counter : {count}
      </h1>
      <div className="flex gap-4 items-center ">
        <button
          className="cursor-pointer text-3xl bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="cursor-pointer text-3xl bg-red-500 hover:bg-red-600 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="cursor-pointer text-3xl bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
          onClick={incrementByFive}
        >
          Increment by 5
        </button>
        <button
          onClick={reset}
          className="cursor-pointer text-3xl bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
        >
          Reset
        </button>
      </div>

      <h2 className="text-3xl font-bold mt-8 mb-4 text-yellow-400">
        Welcome to CHARUSAT
      </h2>

      <div className="flex flex-col gap-4 bg-gray-700 p-6 rounded-lg shadow-lg">
        <div className="flex gap-4">
          <input
            onChange={firstNameChange}
            value={firstname}
            type="text"
            placeholder="Enter Your First Name"
            className="px-4 py-2 rounded-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            onChange={lastNameChange}
            value={lastname}
            type="text"
            placeholder="Enter Your Last Name"
            className="px-4 py-2 rounded-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex gap-6 text-lg">
          <span className="text-green-400">First Name: {firstname}</span>
          <span className="text-blue-400">Last Name: {lastname}</span>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default App;
=======
<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 35fa9b3 (upated files)
>>>>>>> 5fea5ef (upated files)
