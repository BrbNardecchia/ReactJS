import Movieitem from "./Movieitem"


const Movielist = ({movies}) => {
    return(
        <>
        <div className="row d-flex justify-content-center">
            {
                movies.map(movie => <Movieitem key={movie.imdbID} movies={movie} />)
            }

        </div>
        </>
        )
}

export default Movielist