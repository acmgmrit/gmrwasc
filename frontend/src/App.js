import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './components/home/Home';
import About from './components/about/About';
import Events from './components/events/Events';
import Gallary from './components/gallary/Gallary';
import Team from './components/team/Team';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/events" element={<Events />} />
				<Route path="/gallary" element={<Gallary />} />
				<Route path="/team" element={<Team />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;