<script lang="ts">
	import NavLinks from './NavLinks.svelte';
	import SideBar from './SideBar.svelte';
</script>

<div class="navigation-container">
	<SideBar />
	<nav class="navbar" id="navbar">
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
		<div class="navbar-links">
			<NavLinks setClass="" />
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
	}

	.navbar {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 12px 0px;
	}

	.navbar-logo {
		height: 37px;
		width: 37px;
		margin-right: 10px;
	}

	.navbar-logo-outer {
		fill: var(--navbar-logo-outer);
	}

	.navbar-logo-inner {
		fill: var(--navbar-logo-inner);
	}

	.navbar-links {
		letter-spacing: 0.03em;
		height: 20px;
	}

	@media only screen and (min-width: 1000px) {
		.navbar {
			margin-left: 5%;
			margin-right: 5%;
		}
	}

	@media only screen and (max-width: 530px) {
		.navbar {
			justify-content: start;
		}

		.navbar-links {
			display: none;
		}

		.navbar-logo {
			margin-left: 24px;
			margin-right: 0px;
		}
	}
</style>
