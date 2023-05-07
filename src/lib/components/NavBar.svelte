<script lang="ts">
	import NavLink from './NavLink.svelte';
	import SideBar from './SideBar.svelte';
</script>

<div class="navigation-container">
	<nav class="navbar" id="navbar">
		<div class="navbar-logo">
			<svg
				width="100%"
				height="100%"
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
			<NavLink href="/" title="Home" />
			<NavLink href="/series" title="Series" />
			<NavLink href="/rng" title="RNG" />
			<NavLink href="/readme" title="Readme" />
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
	}
	@media only screen and (min-width: 400px) {
		.main-container {
			margin-left: 10%;
			margin-right: 10%;
		}
	}

	@media only screen and (min-width: 600px) {
		.main-container {
			margin-left: 15%;
			margin-right: 15%;
		}
	}

	@media only screen and (min-width: 800px) {
		.main-container {
			margin-left: 10%;
			margin-right: 10%;
		}

		.cards-container {
			grid-template-columns: 1fr 1fr;
			gap: 1.5rem;
		}
	}

	@media only screen and (min-width: 1025px) {
		.main-container {
			margin-left: 10%;
			margin-right: 10%;
		}
	}

	@media only screen and (min-width: 1281px) {
		.main-container {
			margin-left: 20%;
			margin-right: 20%;
		}
	}

	@media only screen and (min-width: 1350px) {
		.main-container {
			margin-left: 30%;
			margin-right: 30%;
		}
	}

	@media screen and (max-width: 960px) {
		.blog-container {
			margin: 0 5%;
		}
	}

	@media screen and (max-width: 768px) {
		.markdown-container {
			font-size: 17px;
		}

		code {
			font-size: 14px;
		}
	}

	@media only screen and (max-width: 430px) {
		::-webkit-scrollbar {
			width: 6px;

			&:horizontal {
				height: 6px;
			}
		}

		pre {
		}

		code {
			font-size: 12px;
		}

		pre code {
			padding-left: 1em;
			padding-right: 1em;
		}
	}

	@media only screen and (max-width: 380px) {
		.themer-dropdown-content {
			flex-direction: column;
			justify-content: start;
		}
		.side-navbar {
			display: flex;
			flex-direction: column;
			margin-top: 5px;
			padding: 0px 10px;
		}

		.navbar-link {
			// align-self: flex-start;
			padding-bottom: 10px;
			padding-left: 10px;
			// should be set by variable
			color: #fff;
		}

		.navbar-links {
			display: none;
		}

		.navbar-logo {
			margin-right: 0;
		}
	}
</style>
