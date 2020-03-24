import React from 'react'
import NavBar from "./NavBar"
import Search from "./Search"

export default function Header() {
    return (
        <div className="header">
            <NavBar/>   
            <Search/>
        </div>
    )
}
