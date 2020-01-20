import React, { Component } from 'react';
// Import main style
import './App.css';
// Import styling library
import './assets/css/fontawesome.css';
// Import scripts
import './assets/js/scripts.js';
// Import components
import { Header } from './components/Header.js';
import { MainImage } from './components/MainImage.js';
import { Services } from './components/Services.js';
import { Locations } from './components/Locations.js';
import { Team } from './components/Team.js';
import { Extras } from './components/Extras.js';
import { Footer } from './components/Footer.js';

// main application component
export class App extends Component {
    render() {
        return (
            <div id="app">
	    		{/* render sub-components*/}
	    		<Header />
	    		<MainImage />
	    		<Services />
	    		<Locations />
	    		<Team />
	    		<Extras />
	    		<Footer />
			</div>
        );
    }
}