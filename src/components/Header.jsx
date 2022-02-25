
import React, { Component } from 'react'
import '../styles/Header.css';
import { Link, Outlet } from "react-router-dom"

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <header style={{ marginBotton: 150}}>
                <h1 className="Header-titre">L'application météo</h1>
                <nav className="Header-header" style={{ borderBotton : "solid 1px", paddingBottom: "lrem" }}>
                <Link className="Header-link" to="/accueil" replace>Accueil</Link> | <Link className="Header-link" to="/recherche" replace>Recherche</Link> | <Link className="Header-link" to="/favoris" replace>Favoris</Link> 
                </nav>
                </header>
            </main>
        )
    }
}