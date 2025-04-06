import {Link} from 'react-router-dom'

function Navigation(){
    return (
        <nav className="app-nav">
            <Link to="/">Homepage </Link>
            <Link to="/create">Create </Link>
        </nav>
    )
}

export default Navigation;