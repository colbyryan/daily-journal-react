import React from "react";
import "../NavBar/NavBar.css"
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar_item">
                <Link to="/">Home</Link>
            </li>
            <li className="navbar_item">
                <Link to="/">Your Posts</Link>
            </li>
        </ul>
    )
}