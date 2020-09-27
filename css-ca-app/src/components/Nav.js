import React from "react";
import { IoIosMenu } from "react-icons/io";
import "../sass/App.scss";

function Nav() {
	return (
		<nav className="navbar top-nav navbar-expand-lg px-5">
			<a className="navbar-brand" href="/">
				The Yay Company
			</a>
			<button
				className="navbar-toggler"
				type="button"
				id="navbar-toggle"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon">
					<IoIosMenu size={30} />
				</span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<a className="nav-link" href="/">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/news">
							News
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/contact">
							Contact
						</a>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input
						className="form-control search"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button className="btn btn-go my-2 my-sm-0" type="submit">
						Go
					</button>
				</form>
			</div>
		</nav>
	);
}

export default Nav;
