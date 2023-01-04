import React from "react";
import popularDestination from "../data/popularDestination";
import Destinations from "./components/destinations";


function App() {
  return(
<div className="min-h-screen flex items-center bg-teal-500">
  <div className="flex-1  max-w-4xl mx-auto p-10">

  <ul className="grid grid-rows-4 grid-cols-6 gap-8 grid-flow-row"> 
            <li className=" col-span-3 bg-black rounded-lg shadow-xl "><div className="h-24"> grid grid-cols-1 gap-4  </div></li>
            <li className="col-span-1 col-start-5 col-end-7 bg-pink-600 rounded-lg shadow-xl"><div className="h-24">sm:grid-cols-2 sm:gap-4 </div></li>
            <li className=" col-span-2 bg-white rounded-lg shadow-xl"><div className="h-24">md:grid-cols-3 md:gap-8</div></li>
            <li className=" col-span-4 bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className=" col-span-5 bg-purple-700 rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className=" row-span-2 bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className=" row-span-2 bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className=" col-span-4 bg-pink-600 rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className=" col-span-2 bg-blue-900 rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className=" col-span-3 bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className=" col-span-3 bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className=" col-span-3 bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
  </ul>
    
   </div>
</div>
)}

export default App
