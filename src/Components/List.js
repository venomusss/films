import Film from "./Film";

function List(props){
    return(
        <div className='List'>
            {props.films.map((film)=>(
                <Film
                    title={film.original_title}
                    poster={film.poster_path}
                    overview={film.overview}
                    rate={film.vote_average}
                    id={film.id}
                />
            ))}
        </div>
    );
}

export default List;