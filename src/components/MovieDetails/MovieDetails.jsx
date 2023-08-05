import React from "react";
import { NavLink } from "react-router-dom";


const MoviesDetails = ({MoviesDetails,movieId}) => {
    return(
        <div>
           <div> 
            <img src="" alt="" />
            <h2>{movieId}</h2>
            <p>опис фільму</p>
            <h3>Overview</h3>
            <p>jdhfjgkvobjfhdejkfv</p>
            <h3>Genres</h3>
            <p></p>
        
        </div> 
        <div>
            <NavLink to='cast'>Cast</NavLink>
            <NavLink to='revies'>Revies</NavLink>
            </div> 
        </div>
       
    )
}

export default MoviesDetails;