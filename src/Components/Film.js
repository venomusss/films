import { Link } from "react-router-dom"
function Film({title, poster, overview, rate, id}) {
    const posterLink = `https://image.tmdb.org/t/p/original/${poster}`
    return (
        <Link to={`/details/${id}`}>
            <div className='Film'>

                <div className='item-descr'>
                    <h3 className='item-title'>{title}</h3>
                    <h3><span className='star'> ★ </span>{rate}/10</h3>
                    {overview ? (
                        <p className='overwiew'>{overview}</p>
                    ) :
                    (
                        <p>No description</p>
                    )}
                </div>
                {poster ? (
                        <img className="poster" src={posterLink}/>
                    ) :
                    (
                        <img className="poster" src='https://i.pinimg.com/originals/b5/53/bb/b553bb9f64c3695d2cdadae1830c9be2.jpg'/>
                    )}
            </div>
        </Link>

    );
}

export default Film;