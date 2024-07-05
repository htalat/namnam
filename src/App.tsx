import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Booklist from "./components/Booklist";

function App() {
  return (
    <>
      <main className="grid grid-cols-12 text-white">
        <div className="mt-5 col-span-2"></div>
        <div className="mt-5 p-1 col-span-8">
          <h1 className=" font-bold text-6xl">Hello world!</h1>
          <h2>My collection of books</h2>
          <Booklist />
        </div>
        <div className="mt-5"></div>
      </main>
    </>
  );
}

export default App;
