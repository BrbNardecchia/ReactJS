import Menu from './Menu'
import Searchbar from './Searchbar'


const Navbar = (params) => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/movies">Movies</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <Menu />
                <Searchbar {...params}/>
            </div>
        </nav>
    )
}

export default Navbar



