"use client";

import { useState } from "react";

type values = number;

export default function Home() {
  // function FizzBuzz(): void {
  //   for (let x: number = 1; x <= 50; x++) {
  //     if (x % 3 === 0 && x % 5 === 0) {
  //       console.log("FizzBuzz");
  //     } else if (x % 3 === 0) {
  //       console.log("Fizz");
  //     } else if (x % 5 === 0) {
  //       console.log("Buzz");
  //     } else {
  //       console.log(x);
  //     }
  //   }
  // }

  // FizzBuzz();

  const [result, setResult] = useState(0);

  const handClick = () => {
    const laSuma = sumar(10, 50);

    setResult(laSuma);
  };

  const sumar = (a: values, b: values): values => {
    return a + b;
  };

  return (
    <main className="main-container">
      <h1>HELLO WORLD!! ✨</h1>
      <h2>Mi primer ¡Hola Mundo! desde Next.js + TypeScript! 🤍</h2>
      <div>{result}</div> 
      <button onClick={() => {handClick();}}className="miButton">Sumar y mostrar</button>
    </main>
  );
}