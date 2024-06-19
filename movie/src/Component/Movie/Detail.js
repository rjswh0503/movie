import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import Credits from './Credits';



const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=ko&region=kr&api_key=5704c5bb2dfd772259a3076e7be4a829`);
          setMovie(response.data);
        } catch (error) {
          console.log('영화 세부 정보를 불러오는 중 오류 발생', error);
        }
      };
      fetchData();
    }, [movie]);

    return (
        <div>
            
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>

        <div>
            <Credits/>
        </div>
        
        </div>
      );
}

export default MovieDetail;