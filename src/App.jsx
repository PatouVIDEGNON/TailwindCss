import React from "react";
import popularDestination from "../data/popularDestination";
import Destinations from "./components/destinations";


function App() {
  return(
<div className="min-h-screen flex items-center bg-teal-500">
  <div className="flex-1  max-w-4xl mx-auto p-10">
  <ul className="grid grid-rows-4 grid-cols-6 gap-8 grid-flow-row-dense"> 
            <li className=" col-span-4 bg-gray-800 rounded-lg shadow-xl "><div className="h-24"> grid grid-cols-1 gap-4  </div></li>
            <li className=" col-span-3 bg-pink-600 rounded-lg shadow-xl"><div className="h-24">sm:grid-cols-2 sm:gap-4 </div></li>
            <li className="  bg-yellow-400 rounded-lg shadow-xl"><div className="h-24">md:grid-cols-3 md:gap-8</div></li>
            <li className="  bg-yellow-400 rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className="  bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className="  bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className="  bg-pink-600 rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className="  bg-blue-900 rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className=" bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className="  bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className="  bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className="  bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
  </ul>
    
   </div>
</div>
)}

export default App
