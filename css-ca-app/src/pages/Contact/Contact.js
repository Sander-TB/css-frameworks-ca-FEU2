import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
	return (
		<div className="contact">
			<div>
				<h1 className="headings heading__submit ml-4 mb-4">
					Submit your details
				</h1>
				<form className="submit__form p-4">
					<div class="form-group">
						<label className="input__label" for="InputName">
							Name
						</label>
						<input type="text" class="form-control" id="InputName" />
					</div>
					<div class="form-group">
						<label className="input__label" for="InputEmail">
							Email
						</label>
						<input type="email" class="form-control" id="InputEmail" />
					</div>
					<div class="form-group">
						<label className="input__label" for="InputWebsite">
							Website
						</label>
						<div class="input-group mb-3">
							<div class="input-group-prepend">
								<button
									className="btn disabled website__btn"
									type="button"
									id="button-addon1"
								>
									https://
								</button>
							</div>
							<input type="text" class="form-control" placeholder="" />
						</div>
					</div>
					<div class="form-group">
						<label className="input__label" for="FormControlTextarea">
							Message
						</label>
						<textarea
							class="form-control"
							id="FormControlTextarea"
							rows="7"
						></textarea>
					</div>
					<div class="form-group form-check">
						<input
							type="checkbox"
							className="form-check-input contact__checkbox"
							id="exampleCheck1"
						/>
						<label
							className="form-check-label input__label input__label-text"
							for="exampleCheck1"
						>
							Allow us to sell your personal details to whomever we want
						</label>
					</div>
					<button
						type="submit"
						class="btn btn-primary btn-block contact__btn py-3"
					>
						Submit
					</button>
				</form>
			</div>
			<div className="contact__info-wrapper contact-list-container">
				<ul className="icons-list">
					<li>
						<FaEnvelope size={30} className="icons__contact" />
					</li>
					<li>
						<FaPhone size={30} className="icons__contact" />
					</li>
					<li>
						<FaMapMarkerAlt size={30} className="icons__contact" />
					</li>
				</ul>
				<ul className="contact__info-ul">
					<li className="contact__info-li mb-4">hello@yay.com</li>
					<li className="contact__info-li mb-4">123 456 7890</li>
					<li className="contact__info-li mb-4">
						123 Some Street
						<br /> Shomewhere <br /> Some City <br /> 1000{" "}
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Contact;
