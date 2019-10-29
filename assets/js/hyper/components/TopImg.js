import { h, app } from 'hyperapp';

export default function TopImg({ state, actions }) {
	return (
		<section class="TopImg">
			<div class="container">
				<div class="title">
					<h5>Welcome</h5>

					<h1>
						Prime Steak <br />
						Restaurant
					</h1>
				</div>

				<div class="contact-info">
					<div class="container">
						<div class="booking">Book Table Directly</div>
						<h2>(712) 219 - 8652</h2>

						<div class="hours">
							Opening Hours <strong> Mon - Fri: 9am - 9pm </strong>
							<strong> Weekend: 9pm - 11pm </strong>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
