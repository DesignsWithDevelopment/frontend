import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="text-2xl font-semibold mt-4 ml-4">Contact Us</h2>
      <div className="grid grid-cols-12 grid-rows-8 gap-2 mt-4 ml-4 mr-4">

        <div className="col-span-2 ">
          <label>Fist Name *</label> <br />
          <input type="text" className="border border-gray-400 rounded w-60 h-10 mt-2"/>
        </div>

        <div className="col-span-2 ">
          <label>Last Name *</label> <br />
          <input type="text" className="border border-gray-400 rounded w-60 h-10 mt-2"/>
        </div>

        <div className="row-start-2 col-span-4 ">
          <label>Email Address *</label> <br />
          <input type="text" className="border border-gray-400 rounded w-full h-10 mt-2" />
        </div>

        <div className="row-start-3 col-span-4 ">
          <label>Qyery Type *</label>
          <div className="flex space-x-11 mt-2">
            <div className="border border-gray-400 rounded flex justify-start items-center w-60 h-10"><input type="radio" className="ml-4 mr-3"/> <label>General Query</label></div>
            <div className="border border-gray-400 rounded flex justify-start items-center w-60 h-10"><input type="radio" className="ml-4 mr-3"/> <label>Support Request</label></div>
          </div>
        </div>

        <div className="row-start-4 col-span-4 ">
          <label>Message *</label> <br />
          <input type="text" className="border border-gray-400 rounded w-full h-full mt-2 "/>
        </div>

        <div className="row-start-5 col-span-4  mt-7">
          <div className="flex justify-start items-center mt-2">
            <input type="checkbox" className="mr-3 ml-4"/>
            <label>I concent to being contacted by the team</label>
          </div>
        </div>

        <div className="row-start-6 col-span-4 ">
          <button className="border rounded w-full h-3/4 bg-green-800 text-white">Submit</button>
        </div>
      </div>
    </>
  );
}

export default App;
