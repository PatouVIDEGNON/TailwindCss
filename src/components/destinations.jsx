import React from "react";
import App from "../App";

export default function Destinations ({destination}) {

return(
    <div  key={destination.city} className="flex items-center rounded-md bg-white shadow-lg overflow-hidden">
  <img src={destination.imageUrl} alt= {destination.imgaAlt} className="h-32 w-32 flex-shrink-0 "/>
  <div className="px-6 py-4">
    <h3 className=" text-lg font-semibold text-gray-800 ">{destination.city}</h3>
   <p className=" text-gray-600">
    $ {destination.averagePRice}/night average
   </p>
   <div className="mt-4">
    <a href="" className=" text-brand hover:text-brand-light font-semibold text-sm">Explore {destination.propertyCount} properties</a>
   </div>
  </div>
</div>
)    
}
