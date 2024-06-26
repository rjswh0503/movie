import axios from "axios";
import React, {useState, useEffect} from 'react';
import {Link, useLocation,useParams} from 'react-router-dom';
import '../../Css/Credits.css';
import '../../index.css';


const MovieCredits = () => {

    const [credits, setCredits] = useState([]);
    const {id} = useParams();


    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}/credits?&region=kr&language=ko&api_key=5704c5bb2dfd772259a3076e7be4a829`
          )
          .then((response) => {
            const creditsData = response.data.cast.map((credit) => ({
                id: credit.id,
                name: credit.name,
                original_name: credit.original_name,
                profile_path: `https://image.tmdb.org/t/p/w200${credit.profile_path}`,

                

            }));
            setCredits(creditsData);
          })
          .catch((error) => {
            console.log('데이터 없음', error);
          });
      }, []);

    return(
        <div>
            <h3>주요 출연진</h3>
            <div className="credits">
            
                {credits.map((credit) => (
                <ul key={credit.id}>
                <div className="rounded-full">
                    <Link to={`/movie/credits/detail/${credit.id}`}>
            
                    <img src={credit.profile_path} alt={credit.name}/>
                    </Link>
                </div>    
                <li><p>{credit.name}</p></li>
                <li><p className="original_name">{credit.original_name}</p></li>
                
        </ul>
      ))}
            </div>
        </div>
    )

}

export default MovieCredits;