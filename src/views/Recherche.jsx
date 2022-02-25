import React, { Component } from 'react'
import SearchCity from '../components/SearchCity';
import Header from '../components/Header';

export default class Recherche extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <Header/>
                <SearchCity/>
            </main>
        )
    }
}