import {Link, useLocation} from 'react-router-dom'

function Navigation(){
    const location = useLocation();
    const path = location.pathname;
    
    return (
        <nav className="app-nav">
            {path === '/' && (
                <Link to="/create">Create </Link>
            )}
            {path === '/create' && (
                <Link to="/">Home</Link>
            )}
        </nav>
    )
}

export default Navigation;