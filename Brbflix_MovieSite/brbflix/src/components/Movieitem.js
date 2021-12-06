const Movieitem = ({ movies }) => {
    return (
        <div className="card m-2 col-md-3 col-lg-6" style={{ width: '18rem' }}>
            <img src={movies.Poster} className="card-img-top" alt={movies.Title} />
            <div className="card-body">
                <h5 className="card-title text-primary">{movies.Title}</h5>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    VIEW DETAILS
                </button>
            </div>
        </div>
    )
}

export default Movieitem