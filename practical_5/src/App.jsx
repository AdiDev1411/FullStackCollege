import React, { useState } from "react";

const App = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");
  const [isNewCalculation, setIsNewCalculation] = useState(true);

  const inputNumber = (num) => {
    if (isNewCalculation) {
      setExpression(String(num));
      setResult("0");
      setIsNewCalculation(false);
    } else {
      setExpression(expression + num);
    }
  };

  const inputOperation = (op) => {
    if (expression === "") {
      setExpression(result + " " + op + " ");
    } else if (expression.endsWith(" ")) {
      // Replace the last operation
      setExpression(expression.slice(0, -2) + op + " ");
    } else {
      setExpression(expression + " " + op + " ");
    }
    setIsNewCalculation(false);
  };

  const calculate = (expr) => {
    try {
      // Replace × with * and handle division
      const sanitizedExpr = expr.replace(/×/g, "*").replace(/÷/g, "/");

      // Use Function constructor for safe evaluation
      const result = Function('"use strict"; return (' + sanitizedExpr + ")")();

      return isFinite(result) ? result : "Error";
    } catch (error) {
      return "Error";
    }
  };

  const performCalculation = () => {
    if (expression.trim() === "") return;

    // Remove trailing operation if exists
    const cleanExpression = expression.replace(/\s[+\-×/]\s*$/, "");

    const calculatedResult = calculate(cleanExpression);
    setResult(String(calculatedResult));
    setIsNewCalculation(true);
  };

  const clearAll = () => {
    setExpression("");
    setResult("0");
    setIsNewCalculation(true);
  };

  const inputDecimal = () => {
    if (isNewCalculation) {
      setExpression("0.");
      setResult("0");
      setIsNewCalculation(false);
    } else {
      const parts = expression.split(/[\s+\-×/]/);
      const lastPart = parts[parts.length - 1];

      if (!lastPart.includes(".")) {
        if (expression.endsWith(" ")) {
          setExpression(expression + "0.");
        } else {
          setExpression(expression + ".");
        }
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-white">Calculator</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-2xl w-96 border border-gray-700">
        {/* Expression Input */}
        <input
          type="text"
          className="w-full p-3 text-lg bg-gray-700 text-white border border-gray-600 rounded mb-2 text-right focus:outline-none"
          value={expression}
          placeholder="Enter expression..."
          readOnly
        />

        {/* Result Display */}
        <input
          type="text"
          className="w-full p-4 text-3xl bg-gray-600 text-green-400 border border-gray-500 rounded mb-4 text-right focus:outline-none font-bold"
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={() => inputNumber(7)}
            className="bg-gray-600 text-white p-4 rounded hover:bg-gray-500 transition-colors font-semibold"
          >
            7
          </button>
          <button
            onClick={() => inputNumber(8)}
            className="bg-gray-600 text-white p-4 rounded hover:bg-gray-500 transition-colors font-semibold"
          >
            8
          </button>
          <button
            onClick={() => inputNumber(9)}
            className="bg-gray-600 text-white p-4 rounded hover:bg-gray-500 transition-colors font-semibold"
          >
            9
          </button>
          <button
            onClick={() => inputOperation("/")}
            className="bg-orange-600 text-white p-4 rounded hover:bg-orange-500 transition-colors font-semibold"
          >
            /
          </button>

          <button
            onClick={() => inputNumber(4)}
            className="bg-gray-600 text-white p-4 rounded hover:bg-gray-500 transition-colors font-semibold"
          >
            4
          </button>
          <button
            onClick={() => inputNumber(5)}
            className="bg-gray-600 text-white p-4 rounded hover:bg-gray-500 transition-colors font-semibold"
          >
            5
          </button>
          <button
            onClick={() => inputNumber(6)}
            className="bg-gray-600 text-white p-4 rounded hover:bg-gray-500 transition-colors font-semibold"
          >
            6
          </button>
          <button
            onClick={() => inputOperation("×")}
            className="bg-orange-600 text-white p-4 rounded hover:bg-orange-500 transition-colors font-semibold"
          >
            ×
          </button>

          <button
            onClick={() => inputNumber(1)}
            className="bg-gray-600 text-white p-4 rounded hover:bg-gray-500 transition-colors font-semibold"
          >
            1
          </button>
          <button
            onClick={() => inputNumber(2)}
            className="bg-gray-600 text-white p-4 rounded hover:bg-gray-500 transition-colors font-semibold"
          >
            2
          </button>
          <button
            onClick={() => inputNumber(3)}
            className="bg-gray-600 text-white p-4 rounded hover:bg-gray-500 transition-colors font-semibold"
          >
            3
          </button>
          <button
            onClick={() => inputOperation("-")}
            className="bg-orange-600 text-white p-4 rounded hover:bg-orange-500 transition-colors font-semibold"
          >
            -
          </button>

          <button
            onClick={() => inputNumber(0)}
            className="bg-gray-600 text-white p-4 rounded hover:bg-gray-500 transition-colors col-span-2 font-semibold"
          >
            0
          </button>
          <button
            onClick={inputDecimal}
            className="bg-gray-600 text-white p-4 rounded hover:bg-gray-500 transition-colors font-semibold"
          >
            .
          </button>
          <button
            onClick={() => inputOperation("+")}
            className="bg-orange-600 text-white p-4 rounded hover:bg-orange-500 transition-colors font-semibold"
          >
            +
          </button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <button
            onClick={clearAll}
            className="bg-red-600 text-white p-4 rounded hover:bg-red-500 transition-colors font-semibold"
          >
            Clear
          </button>
          <button
            onClick={performCalculation}
            className="bg-blue-600 text-white p-4 rounded hover:bg-blue-500 transition-colors font-semibold"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
