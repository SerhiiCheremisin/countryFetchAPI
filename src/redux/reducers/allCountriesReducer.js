import {STORE_ALL_COUNTRIES} from '../types';
const initState = []

 const allCountriesReducer = (state = initState, action) => {
  switch (action.type){

    case STORE_ALL_COUNTRIES : {
       if (state.length > 0) {
        return state
       }
      const sortArr = action.payload.sort((a,b) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0))
      return state = sortArr
    }
    default: return state
  }
}

export default allCountriesReducer;