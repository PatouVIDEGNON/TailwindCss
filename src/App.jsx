import React from "react";
import popularDestination from "../data/popularDestination";
import Destinations from "./components/destinations";


function App() {
  return(
<div className=" grid place-items-center min-h-screen"> 

<div className="grid gap-4 p-4 max-w-5xl xs:grid-cols-2 md:grid-cols-4">
<h1 className=" text-4xl font-extrabold  xs:col-span-2 xs:grid xs:grid-cols-2 xs:gap-4 md:col-span-3 md:text-5xl md:grid-cols-3 " ><span className=" bg-gray-400  md: col-span-1">Grid Layout By TailWindCss</span></h1>
<p className="xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 pr-12 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam sapiente nihil aperiam! Aut, nihil iste itaque beatae, eaque sapiente non officia fugit quasi, voluptate labore facere minima expedita rerum? Incidunt.</p>
<div className="h-10 bg-blue-500 xs:h-auto xs:square"></div>
<div className="h-10 bg-blue-500 xs:h-auto xs:square"></div>
<div className="h-10 bg-pink-500 xs:h-auto xs:square"></div>
<div className="h-10 bg-blue-500 xs:h-auto xs:square md:col-start-2"></div>
<div className="h-10 bg-pink-500 xs:h-auto xs:square"></div>
<div className="h-10 bg-blue-500 xs:h-auto xs:square"></div>
<div className="h-10 bg-blue-500 xs:h-auto xs:square"></div>
<div className="h-10 bg-pink-500 xs:h-auto xs:square"></div>
<p className="self-center md:text-lg md:col-span-2 md:text-center md:px-4
">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>
</div>
)}

export default App
