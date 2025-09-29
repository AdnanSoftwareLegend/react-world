import React, { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = ({ countriesPromise }) => {

const [visitedCountries,setVisitedCountries] = useState([])


const [visitedFlags,setVisitedFlags]=useState([]);

  const countriesData = use(countriesPromise);

  const countries = countriesData.countries;

  const handleVisitedCountries=(Country)=>{

    console.log('handle visited country clicked',Country);

const newVisitedCountries=[...visitedCountries,Country]

setVisitedCountries(newVisitedCountries);
  }
  
const handleVisitedFlag=(flag)=>{

// console.log('Flag is added',flag);

const newVisitedFlags =[...visitedFlags,flag];

setVisitedFlags(newVisitedFlags);

}

  // console.log(countries);

  return (
    <div >
      <h1>In the country {countries.length}</h1>
      <h3>Visited Country :{visitedCountries.length} </h3>
      <h3>Total Flags Visited:{visitedFlags.length}</h3>
      <ol>
        {
          visitedCountries.map(country=><li
          key={country.cca3.cca3}
          
          >{country.name.common}</li>)
        }
      </ol>

<div className="visited-flags-container">
{
  visitedFlags.map(flag=> <img src={flag} alt="" /> )
}

</div>

    <div className="countries">
        {       

           countries.map(country => <Country
            key={country.cca3.cca3}
            country={country}

           handleVisitedCountries={handleVisitedCountries}

           handleVisitedFlag={handleVisitedFlag}

           >

           </Country>)

      }
    </div>
    </div>
  );
};

export default Countries;
