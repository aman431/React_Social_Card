import React from 'react';
import Card from './Card.css';
import logo from './images.jpeg';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const card = () =>{
	return(
		<div class="box">
			<div class="upper_name">
				<a class="icon1" href="#">En</a>
				<a class="icon2" href="#">Fr</a>
			</div>
			<div class="content">
				<h1>Hello <span><br/>WORLD.</span></h1>
				<p>I'm Aman Rathore, Imagine getting your gang of friends together for a night of dancing. Depending on your friends, that might mean a raucous night of YouTube videos after playing Magic: The Gathering at your local comic book store, or it could mean sipping champagne next to a sweaty celebrity at a table with bottle service. Either way, you're probably not too stressed out about, say, whether you'll find an appropriate partner for each song or know the right steps to the songs the disc jockey is spinning. Dancing is fun! </p>

				<p> Be grateful next Saturday night, then, when you don't find yourself transported back in time to the 19th century, where dancing is neither fun nor casual and is probably the biggest social deal of your life.</p>
				<p>A typical night of dancing in the Victorian era (both in Europe and the United States) was nothing if not a tightly wound choreography of strict social behavior and actions.
				</p>
				
				<div className="icons">
					<a href="#"><FaFacebook /></a>
					<a href="#"><FaInstagram /></a>
					<a href="#"><FaWhatsapp /></a>
					<a href="#"><FaTwitter /></a>
					<a href="#"><FaGithub /></a>
					<a href="#"><FaLinkedin /></a>
				</div>
			</div>
			<div class = "images">
				<img alt="Dance" src={logo} />
			</div>
		</div> 
	);
};
export default card;
