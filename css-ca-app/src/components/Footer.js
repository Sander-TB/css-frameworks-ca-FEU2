import React from "react";
import "../sass/App.scss";
import { FaYoutube, FaVimeoV } from "react-icons/fa";

function Footer() {
	return (
		<div class="navbar navbar-inverse navbar-fixed-bottom footer">
			<div class="container footer__container">
				<p class="navbar-text">
					<FaVimeoV size={40} className="icons__footer" />
					<FaYoutube size={40} className="icons__footer" />
				</p>
				<p class="navbar-text">hello@yay.com</p>
				<p class="navbar-text">Copyright 2020</p>
			</div>
		</div>
	);
}

export default Footer;
