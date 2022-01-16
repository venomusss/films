function Film({title, poster, overview, id}) {
    const posterLink = `https://image.tmdb.org/t/p/original/${poster}`
    return (
        <div className='Film'>
            <h5>{title}</h5>
            {overview ? (
                    <p>{overview}</p>
                ) :
                (
                    <p>No description</p>
                )}
            {poster ? (
                    <img className="poster" src={posterLink}/>
                ) :
                (
                    <img className="poster" src='https://i.pinimg.com/originals/b5/53/bb/b553bb9f64c3695d2cdadae1830c9be2.jpg'/>
                )}
        </div>
    );
}

export default Film;