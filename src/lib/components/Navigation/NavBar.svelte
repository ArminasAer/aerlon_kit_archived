<script lang="ts">
	import NavLinks from './NavLinks.svelte';
	import SideBar from './SideBar.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<div class="navigation-container">
	<nav class="navbar" id="navbar">
		<div class="navbar-main-logo">
			<a href="/">
				<div class="navbar-logo">
					<svg
						viewBox="0 0 1500 1500"
						version="1.1"
						style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
					>
						<path
							id="shape_fill"
							d="M1500,750l-750,-750l-750,750l750,750l750,-750Z"
							style="fill:none;"
						/>
						<g>
							<g>
								<path
									class="navbar-logo-inner"
									d="M1185.85,749.999l-435.926,-435.923l-298.059,298.059l167.329,-0l130.977,-130.978l268.811,268.842l-268.811,268.844l-130.977,-130.978l-167.329,0l298.059,298.059l435.926,-435.925Z"
								/>
								<path
									class="navbar-logo-outer"
									d="M590.109,802.2l0.001,-104.4l-369.145,0l529.084,-529.084l449.843,449.842l168.666,0l-618.558,-618.558l-750,750l750,750l618.558,-618.558l-168.666,-0l-449.843,449.842l-529.084,-529.084l369.144,-0Z"
								/>
							</g>
						</g>
					</svg>
				</div>
			</a>
		</div>
		<div class="navbar-links">
			<NavLinks setClass="" />
		</div>
		<div class="navbar-theme-toggle">
			<ThemeToggle />
		</div>
	</nav>
</div>

<style lang="scss">
	.navigation-container {
		display: grid;
		position: sticky;
		top: 0;
		width: 100%;
		margin-bottom: 15px;
		background-color: var(--navbar-background);
		box-shadow: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.1) 0%,
			rgba(0, 0, 0, 0.05) 30%,
			transparent 100%
		);
		::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 0.3rem;
			left: 0;
			bottom: calc(-1 * 0.3rem);
			background: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0.1) 0%,
				rgba(0, 0, 0, 0.05) 10%,
				transparent 100%
			);
		}
	}

	.navbar {
		display: flex;
		align-items: center;
		height: 55px;
	}

	.navbar-logo {
		height: 37px;
		width: 37px;
		// margin-right: 10px;
	}

	.navbar-logo-outer {
		fill: var(--navbar-logo-outer);
	}

	.navbar-logo-inner {
		fill: var(--navbar-logo-inner);
	}

	.navbar-main-logo {
		width: 100%;
		margin-left: 15px;
	}

	.navbar-links {
		width: 100%;
		display: flex;
		letter-spacing: 0.03em;
		justify-content: center;
	}

	.navbar-theme-toggle {
		width: 100%;
		display: flex;
		justify-content: end;
	}

	@media only screen and (min-width: 800px) {
		.navbar {
			margin-left: 10%;
			margin-right: 10%;
		}
	}

	@media only screen and (min-width: 1000px) {
		.navbar {
			margin-left: 20%;
			margin-right: 20%;
		}
	}

	@media only screen and (min-width: 1300px) {
		.navbar {
			margin-left: 30%;
			margin-right: 30%;
		}
	}

	@media only screen and (max-width: 530px) {
		.navbar {
			justify-content: start;
		}

		.navbar-links {
			display: none;
		}
	}
</style>
