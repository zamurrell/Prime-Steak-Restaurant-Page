import { h, app } from 'hyperapp';

export default function Header({ state, actions }) {
	return (
		<header>
			<div class="container">
				<div class="logo">Logo</div>

				<nav>
					<a href="#">Our Story</a>
					<a href="#">Special Menu</a>
					<a href="#">Reservations</a>
				</nav>
			</div>
		</header>
	);
}
