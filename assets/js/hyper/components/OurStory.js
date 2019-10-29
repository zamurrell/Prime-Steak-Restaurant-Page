import { h, app } from 'hyperapp';

export default function OurStory({ state, actions }) {
	return (
		<section class="OurStory">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<h5 class="comp-title">Our Story</h5>

						<h2 class="">Cooking Is The Art Of Adjustment</h2>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui.
						</p>
						<div class="quote">
							<strong>Thomas Eggsy</strong> - Head chef at a restaurant
						</div>
						<a href="#" class="res-btn">
							Reservations
						</a>
					</div>

					<div class="col-md-6">
						<div class="video-img"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
