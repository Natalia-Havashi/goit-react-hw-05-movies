import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "servise/servise";

const Revies = () => {
    const {movieId} = useParams();
    const [revies, setRevies] = useState('');
    useEffect(() => {
        const getRevies = async movieId => {
            try{
                const {results} = await getMovieReviews(movieId)
            setRevies(results) 
            }catch(error) {
                console.log(error)
            }
           
        }
        getRevies(movieId)
    }, [movieId])
    return (
        <div>
            <h3>Cast</h3>
            <ul>
                <li></li>
                <p>Інформація про огляд фільму</p>
            </ul>
        </div>
   )
}

export default Revies;