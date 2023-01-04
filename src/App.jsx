import React from "react";
import popularDestination from "../data/popularDestination";
import Destinations from "./components/destinations";


function App() {
  return(
<div className="min-h-screen flex items-center bg-teal-500">
  <div className="flex-1  max-w-4xl mx-auto p-10">

  <ul className=" grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4  md:grid-cols-3 md:gap-8"> 
            <li className="  bg-black rounded-lg shadow-xl "><div className="h-24">   </div></li>
            <li className="  bg-pink-600 rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className="  bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className="  bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className="  bg-purple-700 rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className="  bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className="  bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className="  bg-pink-600 rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className="  bg-blue-900 rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className="  bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className="  bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
            <li className="  bg-white rounded-lg shadow-xl"><div className="h-24"></div></li>
  </ul>
    
   </div>
</div>
)}

export default App
