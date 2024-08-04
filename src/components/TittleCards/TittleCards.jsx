import { useEffect, useRef, useState } from 'react'
import './TittleCards.css'
import cardData from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types';

// TittleCards.propTypes = {
//   title: PropTypes.string,
//   category: PropTypes.string,
// };


const TittleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDJiZDdhMmFlNzYzNTk5MGVlNzE1NzliZGZhYTNiZCIsIm5iZiI6MTcyMjY4MTkwMS4wNzcyNDUsInN1YiI6IjY2YWUwOGQ3MzdjMjc4ZDYyYWJkNzM5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NU5mhMGftxuBarjyuuooPkXigIq9kWczuweAG1mMybU'
    }
  };
  
 

  const handleWheel = (event)=>{
    event.prefentDefault;
    cardsRef.current.scrollLeft += event.deltaY;
  }
  
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])

  return (
    <div className='tittle-cards'>
      <h2>{title?title:"Popular on CalFlix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TittleCards
