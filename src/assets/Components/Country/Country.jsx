


import React, { useState } from 'react';
import './Country.css'
const  Country = ({country,handleVisitedCountries,handleVisitedFlag}) => {
// console.log(country.population.population);
const [Visited,setVisited]=useState(false);
const handleVisited=()=>{
 
// setVisited(true)
// console.log('btn clicked');
// alert('Already Visited');
 
// Basic system:
// if(Visited){
//     setVisited(false)
// }

// else{

//     setVisited(true)
// }


// Second system
// setVisited(Visited ? false : true)

// Third System

setVisited(!Visited);

handleVisitedCountries(country);

}

    return (
        // <div className={`country border-lg text-center ${Visited ? 'country-visited': 'country-not-visited'} `}>
          
        <div className={`country ${Visited && 'country-visited'}`}>
        
        <img src={country.flags.flags.png} alt="" />
            <h3>Name:{country.name.common}</h3>
            <p>Population:  {country.population.population}</p>
            <p>Area : {country.area.area} </p>

            <p> Country Size:  {
                
                country.area.area > 300000 ? 
                "Big country " 
                
                :"Small Country "
                
                }  </p> 
<button onClick={handleVisited}>

{Visited ? "Visited" : "Not Visited"}

</button>   

<button onClick={()=>{

handleVisitedFlag(country.flags.flags.png)

}}> Add Visited Flag</button>

        </div>
    );
};

export default Country;