import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <nav className="flex justify-around">
                <Link to="/"><h3 className="my-2">Hello</h3></Link>
                <ul className="flex">
                    <Link to="/home"><li className="m-2">Home</li></Link>
                    <Link to="/about"><li className="m-2">About</li></Link>
                </ul>
            </nav>
        </>
    )
}
