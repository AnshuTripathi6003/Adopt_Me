import { useState } from "react";

const SearchParams = () =>{
    const [location , setLocation]= useState("Seattle, WA");
    
    // if()
    return(
        <div className="search-params">
            <form>
                <label htmlFor="location">
                location
                <input id="location" 
                onChange={(e)=>setLocation(e.target.value)} 
                value={location} 
                placeholder="location"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;