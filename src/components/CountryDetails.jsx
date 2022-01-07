import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";


const CountryDetails = () => {
const country = useSelector(state => state.chosenCounties.singleCountry);
const countryList = useSelector(state => state.countryList);
const [singleCountry, setSingleCountry] = useState({});

useEffect(() => {
  if (country !== '') {
    const filteredList = countryList.filter(item => item.name.common === country);
    setSingleCountry(filteredList);
    return
  }
   
},[country])

  return (
    <div className="country-details">
      {country === '' && 
      <h2>
      No country chosen for now
      </h2>}
      {country !== '' && 
      <>
       <h2>{singleCountry[0]?.name.common}</h2>
       <h2>The capital is : {singleCountry[0]?.capital[0]}</h2>
       <h2>Region : {singleCountry[0]?.region} </h2>
       <h2>The area is: {singleCountry[0]?.area} km</h2>
       <h2>The population are : {singleCountry[0]?.population} people</h2>
       <h2>The CAA2 code is: {singleCountry[0]?.cca2}</h2>
       <div className='img-wrapper'>
         <img src={singleCountry[0]?.flags.png} alt="country flag"/>
       </div>
      </>
      }
    </div>
  );
}

export default CountryDetails;
