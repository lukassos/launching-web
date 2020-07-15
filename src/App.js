import React from 'react';
import logo from './startup.svg';
import './App.css';

import NavBar from './components/NavBar.js'
import InfoSection from './components/InfoSection.js'

import LaunchingFalcon from './components/LaunchingFalcon.js'

function App() {
  return (
    <div className="App">
	 	<NavBar />
	    <InfoSection />
    	<LaunchingFalcon />
    </div>
  );
}

export default App;
