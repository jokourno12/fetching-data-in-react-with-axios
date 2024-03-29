import React from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="nav bg-dark">
                <Link to='/' className="nav-link active">Home</Link>
                <Link to='/data-1' className="nav-link active">Fetch Data 1</Link>
                <Link to='/data-1-map' className="nav-link active">Fetch Data 1 Map</Link>
                <Link to='/lifecyclemethod' className="nav-link active">Life Cycle Method</Link>
                <Link to='/newsapi' className='nav-link active'>News API</Link>
            </nav>
        )
    }
}