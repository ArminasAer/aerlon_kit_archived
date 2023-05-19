<script lang="ts">
	import NavLinks from './NavLinks.svelte';
	import SideBar from './SideBar.svelte';
</script>

<div class="navigation-container">
	<nav class="navbar" id="navbar">
		<div class="navbar-logo">
			<svg
				width="45px"
				height="45px"
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
		<div class="navbar-links">
			<NavLinks setClass="" />
		</div>
		<SideBar />
	</nav>
</div>

<style lang="scss">
	.navigation-container {
		display: grid;
		width: 100%;
		padding: 10px;
		margin-bottom: 20px;
		background-color: var(--navbar-background);
		border-bottom: 1px solid var(--navbar-border-color);
	}

	.navbar {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.navbar-logo {
		height: 45px;
		width: 45px;
		margin-right: 6px;
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

	@media only screen and (max-width: 530px) {
		.navbar-links {
			display: none;
		}
	}
</style>
