import React, { useEffect, useState } from "react";
import { getMovieCredits } from "servise/servise";

const Cast = () =>{
    const [cast, setCast] = useState('');
    useEffect(() => {
        const getCast = async() => {
            try{
                const {results} = await getMovieCredits()
             setCast(results)
            } catch(error) {
                console.log(error)
            }
        }
        getCast()
    }, [cast])
    return (
        <div>
            <h2>Акторський склад</h2>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}

export default Cast;