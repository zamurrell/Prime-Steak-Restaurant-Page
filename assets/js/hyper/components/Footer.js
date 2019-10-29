import { h, app } from 'hyperapp';

export default function Footer({ state, actions }) {
	return (
		<footer>
			<div class="container">
				<nav class="menu">
					<a href="#">Our Story</a>
					<a href="#">Special Menu</a>
					<a href="#">Reservations</a>
				</nav>

				<div class="social-media">
					<i class="footer-icon fab fa-twitter"></i>
					<i class="footer-icon fab fa-facebook-f"></i>
					<i class="footer-icon fab fa-instagram"></i>
					<i class="footer-icon fas fa-envelope"></i>
				</div>

				<div class="copyright">© Copyright 2019</div>
			</div>
		</footer>
	);
}
