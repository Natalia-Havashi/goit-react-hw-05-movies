import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'servise/servise';
import {
  Actor,
  ActorCharacter,
  ActorName,
  CastList,
  Container,
  List,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await getMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);
  return (
    <Container>
      <h2>Cast</h2>
      {cast && cast.length > 0 ? (
        <CastList>
          {cast &&
            cast.map(actor => (
              <List key={actor.id}>
                {actor.profile_path ? (
                  <Actor
                    src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    alt={actor.name}
                  />
                ) : (
                  <img src="https://via.placeholder.com/185x250" alt="" />
                )}
                <div>
                  <ActorName>{actor.name}</ActorName>
                  <ActorCharacter>{actor.character}</ActorCharacter>
                </div>
              </List>
            ))}
        </CastList>
      ) : (
        <p>There is no information about the actors of the film</p>
      )}
    </Container>
  );
};

export default Cast;
