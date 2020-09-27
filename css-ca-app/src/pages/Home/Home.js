import React from "react";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import Hero from "../../assets/header-img.png";
import Tab from "../../assets/tv.png";

function Home() {
	return (
		<div>
			<img className="hero-img" src={Hero} alt="Shelves full of old TVs" />
			<div className="m-5 homepage__container">
				<h2 className="headings">We do YAY things</h2>
				<p className="paragraph homepage__paragraph pt-3 pb-5">
					Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a
					rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend
					finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet,
					consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa
					euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus
					a, varius eget massa.
				</p>
				<div className="homepage__card">
					<nav>
						<div class="nav nav-tabs" id="nav-tab" role="tablist">
							<a
								class="nav-link active"
								id="nav-home-tab"
								data-toggle="tab"
								href="#nav-home"
								role="tab"
								aria-controls="nav-home"
								aria-selected="true"
							>
								First
							</a>
							<a
								class="nav-link"
								id="nav-profile-tab"
								data-toggle="tab"
								href="#nav-profile"
								role="tab"
								aria-controls="nav-profile"
								aria-selected="false"
							>
								Second
							</a>
							<a
								class="nav-link"
								id="nav-contact-tab"
								data-toggle="tab"
								href="#nav-contact"
								role="tab"
								aria-controls="nav-contact"
								aria-selected="false"
							>
								Third
							</a>
						</div>
					</nav>
					<div class="tab-content homepage__card-link" id="nav-tabContent">
						<div
							class="tab-pane fade show active card-body homepage__card-tabs p-2"
							id="nav-home"
							role="tabpanel"
							aria-labelledby="nav-home-tab"
						>
							<img
								className="homepage__card-img"
								src={Tab}
								alt="Retro TV"
							></img>
							<div class="homepage__card-text">
								<p className=" homepage__card-tabs-text card-text ml-4">
									Morbi eget efficitur turpis. Vivamus pellentesque tortor
									massa, venenatis pharetra leo laoreet a. Nullam non eleifend
									justo, a ullamcorper turpis. Cras vehicula pharetra lectus non
									maximus. Sed condimentum mattis rhoncus.
								</p>
								<p className="share ml-4">
									SHARE
									<FaFacebookF size={20} className="icons__share" />
									<FaTwitter size={20} className="icons__share" />
								</p>
							</div>
						</div>
						<div
							class="tab-pane fade card-body homepage__card-tabs p-2"
							id="nav-profile"
							role="tabpanel"
							aria-labelledby="nav-profile-tab"
						>
							<img
								className="homepage__card-img"
								src={Tab}
								alt="Retro TV"
							></img>
							<div class="homepage__card-text">
								<p className=" homepage__card-tabs-text card-text ml-4">
									Morbi eget efficitur turpis. Vivamus pellentesque tortor
									massa, venenatis pharetra leo laoreet a. Nullam non eleifend
									justo, a ullamcorper turpis. Cras vehicula pharetra lectus non
									maximus. Sed condimentum mattis rhoncus.
								</p>
								<p className="share ml-4">
									SHARE
									<FaFacebookF size={20} className="icons__share" />
									<FaTwitter size={20} className="icons__share" />
								</p>
							</div>
						</div>
						<div
							class="tab-pane fade card-body homepage__card-tabs p-2"
							id="nav-contact"
							role="tabpanel"
							aria-labelledby="nav-contact-tab"
						>
							<img
								className="homepage__card-img"
								src={Tab}
								alt="Retro TV"
							></img>
							<div class="homepage__card-text">
								<p className=" homepage__card-tabs-text card-text ml-4">
									Morbi eget efficitur turpis. Vivamus pellentesque tortor
									massa, venenatis pharetra leo laoreet a. Nullam non eleifend
									justo, a ullamcorper turpis. Cras vehicula pharetra lectus non
									maximus. Sed condimentum mattis rhoncus.
								</p>
								<p className="share ml-4">
									SHARE
									<FaFacebookF size={20} className="icons__share" />
									<FaTwitter size={20} className="icons__share" />
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="accordion" id="accordionExample">
				<div class="card">
					<div class="card-header" id="headingOne">
						<h2 class="mb-0">
							<button
								class="btn btn-link btn-block text-left accordion-btn"
								type="button"
								data-toggle="collapse"
								data-target="#collapseOne"
								aria-expanded="true"
								aria-controls="collapseOne"
							>
								First
							</button>
						</h2>
					</div>

					<div
						id="collapseOne"
						class="collapse show"
						aria-labelledby="headingOne"
						data-parent="#accordionExample"
					>
						<div class="card-body">
							<p className="accordion-text">
								Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
								venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
								ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
								Sed condimentum mattis rhoncus.
							</p>
							<img
								className="homepage__card-img homepage__card-img-accordion"
								src={Tab}
								alt="Retro TV"
							></img>
							<p className="share ml-4">
								SHARE
								<FaFacebookF size={20} className="icons__share" />
								<FaTwitter size={20} className="icons__share" />
							</p>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-header" id="headingTwo">
						<h2 class="mb-0">
							<button
								class="btn btn-link btn-block text-left collapsed accordion-btn"
								type="button"
								data-toggle="collapse"
								data-target="#collapseTwo"
								aria-expanded="false"
								aria-controls="collapseTwo"
							>
								Second
							</button>
						</h2>
					</div>
					<div
						id="collapseTwo"
						class="collapse"
						aria-labelledby="headingTwo"
						data-parent="#accordionExample"
					>
						<div class="card-body">
							<p>
								Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
								venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
								ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
								Sed condimentum mattis rhoncus.
							</p>
							<img
								className="homepage__card-img homepage__card-img-accordion"
								src={Tab}
								alt="Retro TV"
							></img>
							<p className="share ml-4">
								SHARE
								<FaFacebookF size={20} className="icons__share" />
								<FaTwitter size={20} className="icons__share" />
							</p>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-header" id="headingThree">
						<h2 class="mb-0">
							<button
								class="btn btn-link btn-block text-left collapsed accordion-btn"
								type="button"
								data-toggle="collapse"
								data-target="#collapseThree"
								aria-expanded="false"
								aria-controls="collapseThree"
							>
								Third
							</button>
						</h2>
					</div>
					<div
						id="collapseThree"
						class="collapse"
						aria-labelledby="headingThree"
						data-parent="#accordionExample"
					>
						<div class="card-body">
							<p>
								Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
								venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
								ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
								Sed condimentum mattis rhoncus.
							</p>
							<img
								className="homepage__card-img homepage__card-img-accordion"
								src={Tab}
								alt="Retro TV"
							></img>
							<p className="share ml-4">
								SHARE
								<FaFacebookF size={20} className="icons__share" />
								<FaTwitter size={20} className="icons__share" />
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
