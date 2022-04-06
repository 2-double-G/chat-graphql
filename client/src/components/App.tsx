import * as React from "react";
import { Navbar } from "./Navbar/Navbar";
import { Main } from './Main/Main';



export const App = () => (
  <div className="flex flex-col min-h-screen h-full bg-red-50 p-4">
    <Navbar />
    <Main />
  </div>
);
