import React from "react";
import  ReactDOM from "react-dom";
import popularDestination from "../data/popularDestination";
import Destinations from "./components/destinations";

function App() {
  return(
    <div>
      <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
            <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-12 lg:max-w-full">
                <div>
                    <img src="/src/assets/1.png" alt="Logo-site" className="h-12"/>
                    <img className="mt-5 rounded-lg shadow-2xl sm:mt-8 h-64 sm:w-full sm:object-cover object-center lg:hidden" src="/src/assets/asian-female.jpg" alt="femme souriante"/>
                    <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-3xl lg:text-2xl ">You can work from anywhere.<p className="text-brand">Take advantage of it</p></h1>
                    <p className="mt-2 text-gray-600 lg:text-2xl">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum officiis consequatur adipisci perspiciatis fugit enim voluptatibus atque quas exercitationem perferendis reprehenderit odit, mollitia recusandae eum culpa quis libero consequuntur tenetur.
                    </p>
                 <div className="mt-4 space-x-1" >
                        <a className="  bg-brand hover:bg-brand-light  focus:ring-indigo-500 focus:ring-opacity-60 active:bg-brand-dark
        text-white shadow-lg py-2 hover:-translate-y-0.5 transform transition focus:outline-none focus:ring focus:ring-offset-2
        px-2 rounded-md inline-block uppercase tracking-wider font-semibold text-sm" href="" >book your escape</a>
                        <a className="shadow-lg hover:-translate-y-0.5 transform transition focus:outline-none focus:ring focus:ring-offset-2
        px-2 rounded-md inline-block uppercase tracking-wider font-semibold text-sm  py-2 bg-gray-400 hover:bg-gray-300  focus:ring-gray-400 focus:ring-opacity-60 active:bg-gray-500
        text-gray-800 " href="" >learn more</a>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block relative">
                <img className="absolute inset-0 w-full h-full object-cover object-center
                " src="/src/assets/asian-female.jpg" alt="femme souriante"/>
            </div>
        </div>
<div className="max-w-md md:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
  <h2 className="text-lg text-gray-900">Popular Destinations</h2>
  <p className="mt-2 text-gray-600"> Lorem ipsum, dolor sit amet consequuntur</p>
  <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">

 {popularDestination.map(destination => (
  <Destinations destination={destination} key={destination.city}/>
 ))}



  </div>

</div>
    </div>
  )
  
}

export default App
