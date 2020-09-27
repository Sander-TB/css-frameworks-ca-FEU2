import React from "react";
import tv1 from "../../assets/tv2.png";
import camera1 from "../../assets/camera.png";
import tv2 from "../../assets/tv3.png";
import camera2 from "../../assets/camera2.png";
import tv3 from "../../assets/tv4.png";
import camera3 from "../../assets/camera3.png";
import films from "../../assets/films.png";
import records from "../../assets/record.png";

function News() {
	return (
		<div className="news m-5">
			<h1 className="headings mb-5">News</h1>
			<nav>
				<ul class="pagination pagination-lg">
					<li class="page-item active news-page">
						<span class="page-link news-page__link news-page__link-active">
							1<span class="sr-only">(current)</span>
						</span>
					</li>
					<li class="page-item ">
						<a class="page-link news-page__link" href="/">
							2
						</a>
					</li>
					<li class="page-item ">
						<a class="page-link news-page__link" href="/">
							3
						</a>
					</li>
					<li class="page-item ">
						<a class="page-link news-page__link" href="/">
							4
						</a>
					</li>
				</ul>
			</nav>

			<div class="card-deck my-5">
				<div class="card news__card">
					<img src={tv1} class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Nunc porttitor vel</h5>
						<p class="card-text paragraph">
							Nunc malesuada eget est fringilla dapibus.
						</p>
						<a class="btn btn-primary button" href="/" role="button">
							MORE
						</a>
					</div>
				</div>
				<div class="card news__card">
					<img src={camera1} class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Nunc porttitor vel</h5>
						<p class="card-text paragraph">
							Nunc malesuada eget est fringilla dapibus.
						</p>
						<a class="btn btn-primary button" href="/" role="button">
							MORE
						</a>
					</div>
				</div>
				<div class="card news__card">
					<img src={tv2} class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Nunc porttitor vel</h5>
						<p class="card-text paragraph">
							Nunc malesuada eget est fringilla dapibus.
						</p>
						<a class="btn btn-primary button" href="/" role="button">
							MORE
						</a>
					</div>
				</div>
				<div class="card news__card">
					<img src={camera2} class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Nunc porttitor vel</h5>
						<p class="card-text paragraph">
							Nunc malesuada eget est fringilla dapibus.
						</p>
						<a class="btn btn-primary button" href="/" role="button">
							MORE
						</a>
					</div>
				</div>
			</div>
			<div class="card-deck my-5">
				<div class="card news__card">
					<img src={tv3} class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Nunc porttitor vel</h5>
						<p class="card-text paragraph">
							Nunc malesuada eget est fringilla dapibus.
						</p>
						<a class="btn btn-primary button" href="/" role="button">
							MORE
						</a>
					</div>
				</div>
				<div class="card news__card">
					<img src={camera3} class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Nunc porttitor vel</h5>
						<p class="card-text paragraph">
							Nunc malesuada eget est fringilla dapibus.
						</p>
						<a class="btn btn-primary button" href="/" role="button">
							MORE
						</a>
					</div>
				</div>
				<div class="card news__card">
					<img src={films} class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Nunc porttitor vel</h5>
						<p class="card-text paragraph">
							Nunc malesuada eget est fringilla dapibus.
						</p>
						<a class="btn btn-primary button" href="/" role="button">
							MORE
						</a>
					</div>
				</div>
				<div class="card news__card">
					<img src={records} class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Nunc porttitor vel</h5>
						<p class="card-text paragraph">
							Nunc malesuada eget est fringilla dapibus.
						</p>
						<a class="btn btn-primary button" href="/" role="button">
							MORE
						</a>
					</div>
				</div>
			</div>

			<nav>
				<ul class="pagination pagination-lg">
					<li class="page-item active news-page">
						<span class="page-link news-page__link news-page__link-active">
							1<span class="sr-only">(current)</span>
						</span>
					</li>
					<li class="page-item ">
						<a class="page-link news-page__link" href="/">
							2
						</a>
					</li>
					<li class="page-item ">
						<a class="page-link news-page__link" href="/">
							3
						</a>
					</li>
					<li class="page-item ">
						<a class="page-link news-page__link" href="/">
							4
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default News;
