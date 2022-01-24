import {Link, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Details() {
    let [info, setInfo] = useState({
        title: undefined,
        description: undefined,
        poster: undefined,
        image: undefined,
        genres: undefined,
        runtime: undefined,
        rate: undefined,
        vote_count: undefined,
    })
    const location = useLocation();
    const id = location.pathname.slice(9);
    useEffect(() => {
        async function getFilms() {
            const api = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=382a4abd2d7f797cd56b0fbcf78591fc`);
            const data = await api.json();
            let genres = data.genres;
            console.log(genres);
            let str = "| ";
            genres.map((item) => (
                str += item.name + " | "
            ))
            console.log(str)
            setInfo(info = {
                title: data.original_title,
                poster: data.poster_path,
                image: data.backdrop_path,
                description: data.overview,
                genres: str,
                runtime: data.runtime,
                rate: data.vote_average,
                vote_count: data.vote_count,
            })
        }

        getFilms()
    }, [])

    return (
        <div className='Details'>
            <header className='header'>
                <Link className='logo' to={`/`}>
                    <div>FDB</div>
                </Link>
            </header>
            <div className='details'>
                <div className='det-header'>
                    <h1 className="det-title">{info.title}</h1>
                    <div className='rating'>
                        <p className='rating-label'>Rating:</p>
                        <div className='rating-val'>
                            <p><span className='star'> ★ </span>{info.rate}/10</p>
                            <p className='vote-counter'>{info.vote_count} votes</p>
                        </div>
                    </div>
                </div>
                <div className='det-info'>
                    {info.poster ? (
                            <img className='big-poster' src={`https://image.tmdb.org/t/p/original/${info.poster}`}/>
                        ) :
                        (
                            <img className="big-poster"
                                 src='https://i.pinimg.com/originals/b5/53/bb/b553bb9f64c3695d2cdadae1830c9be2.jpg'/>
                        )}
                    <div className='det-descr'>
                        {info.image ? (
                                <img className='back' src={`https://image.tmdb.org/t/p/original/${info.image}`}/>
                            ) :
                            (
                                <img className="nothing"
                                     src='https://i.pinimg.com/originals/b5/53/bb/b553bb9f64c3695d2cdadae1830c9be2.jpg'/>
                            )}
                        <p className='genres'><span className='genres-label'>Genres: </span> {info.genres}</p>
                        {info.description ? (
                                <p className='overview'><span className='overview-label'>Overview: </span>
                                    <br/>{info.description}</p>
                            ) :
                            (
                                <p className='overview'><span className='overview-label'>Overview: </span> No
                                    description</p>
                            )}
                        <p className='backlink'>
                            <Link to={`/`}><h3 className='goback'><span className='arrow'>←</span>Go back</h3></Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Details;