<script lang="ts">
	import NavLink from './NavLink.svelte';

	let open = false;
	let visible = true;

	let pageWidth: number;

	$: visible = pageWidth < 530;
</script>

<svelte:window
	bind:innerWidth={pageWidth}
	on:click={(e) => {
		// @ts-ignore
		if (open && !e.target.closest('#navbar')) {
			open = false;
		}
	}}
/>

<div class="navigation-container">
	<nav class:open class="navbar" id="navbar">
		<div class="navbar-logo-container">
			<a class="navbar-logo-anchor" href="/">
				<svg
					class="navbar-logo"
					width="100%"
					height="100%"
					viewBox="0 0 203 127"
					version="1.1"
					style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
				>
					<g transform="matrix(1,0,0,1,-174.416,-151.69)">
						<g>
							<g transform="matrix(5.25402,0,0,5.25402,-919.543,-789.04)">
								<path
									d="M208.8,201.258C208.499,201.658 208.58,202.229 208.979,202.531C209.379,202.832 209.95,202.751 210.252,202.352L225.32,182.355C226.41,180.909 228.584,180.909 229.674,182.355L244.742,202.352C245.043,202.751 245.615,202.832 246.015,202.531C246.415,202.229 246.494,201.658 246.193,201.258L231.125,181.262C229.309,178.851 225.685,178.851 223.869,181.262L208.8,201.258Z"
									style="fill:white;fill-rule:nonzero;stroke:white;stroke-width:0.81px;"
								/>
							</g>
							<g transform="matrix(2.31159,0,0,2.31159,-250.15,-221.514)">
								<path
									d="M208.8,201.258C208.499,201.658 208.58,202.229 208.979,202.531C209.379,202.832 209.95,202.751 210.252,202.352L225.32,182.355C226.41,180.909 228.584,180.909 229.674,182.355L244.742,202.352C245.043,202.751 245.615,202.832 246.015,202.531C246.415,202.229 246.494,201.658 246.193,201.258L231.125,181.262C229.309,178.851 225.685,178.851 223.869,181.262L208.8,201.258Z"
									style="fill:white;fill-rule:nonzero;stroke:white;stroke-width:2.88px;"
								/>
							</g>
							<g transform="matrix(-1.06994,1.3103e-16,-1.3103e-16,-1.06994,519.139,430.997)">
								<path
									d="M208.8,201.258C208.499,201.658 208.58,202.229 208.979,202.531C209.379,202.832 209.95,202.751 210.252,202.352L225.32,182.355C226.41,180.909 228.584,180.909 229.674,182.355L244.742,202.352C245.043,202.751 245.615,202.832 246.015,202.531C246.415,202.229 246.494,201.658 246.193,201.258L231.125,181.262C229.309,178.851 225.685,178.851 223.869,181.262L208.8,201.258Z"
									style="fill:white;fill-rule:nonzero;stroke:white;stroke-width:7.79px;"
								/>
							</g>
						</g>
					</g>
				</svg>
			</a>
		</div>
		<div aria-expanded={open && visible} class="navbar-links">
			<NavLink href="/" title="Station" />
			<NavLink href="/blog" title="Blog" />
			<NavLink href="/benchmarks" title="Benchmarks" />
			<NavLink href="/rng" title="RNG" />
			<NavLink href="/about" title="About" />
		</div>
		<button class="menu-toggle" class:open on:click={() => (open = !open)}>
			<svg
				class="menu-toggle-icon"
				id="themer-dropdown-button"
				width="100%"
				height="100%"
				viewBox="0 0 177 168"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				xml:space="preserve"
				style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
			>
				<path
					d="M176.5,151.875c0,-2.918 -2.369,-5.287 -5.287,-5.287l-165.926,0c-2.918,0 -5.287,2.369 -5.287,5.287l0,10.574c0,2.917 2.369,5.286 5.287,5.286l165.926,0c2.918,0 5.287,-2.369 5.287,-5.286l0,-10.574Z"
				/>
				<path
					d="M176.5,78.581c0,-2.918 -2.369,-5.287 -5.287,-5.287l-165.926,0c-2.918,0 -5.287,2.369 -5.287,5.287l0,10.573c0,2.918 2.369,5.287 5.287,5.287l165.926,0c2.918,0 5.287,-2.369 5.287,-5.287l0,-10.573Z"
				/>
				<path
					d="M176.5,5.287c0,-2.918 -2.369,-5.287 -5.287,-5.287l-165.926,0c-2.918,0 -5.287,2.369 -5.287,5.287l0,10.573c0,2.918 2.369,5.287 5.287,5.287l165.926,0c2.918,0 5.287,-2.369 5.287,-5.287l0,-10.573Z"
				/>
			</svg>
		</button>
		<div />
	</nav>
</div>

<style lang="scss">
	.navigation-container {
		z-index: 100;
		display: grid;
		position: sticky;
		top: 23px;
		width: 100%;
		margin-bottom: 15px;
		background-color: var(--navbar-background);
		box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
		height: 50px;

		// expanded and scrolled
	}

	.navbar {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.navbar-logo-container {
		height: 50px;
		display: none;
	}

	.navbar-logo-anchor {
		height: 25px;
		width: 35px;
		justify-self: center;
	}

	.navbar-logo {
		height: 25px;
		// width: 35px;
	}

	.navbar-links {
		// display: flex;
		// letter-spacing: 0.03em;
		// justify-content: center;
		letter-spacing: 0.03em;
		background: none;
		justify-content: center;

		&[aria-expanded='true'] {
			// border-top: 1px solid #292929;
			// border-bottom: 1px solid #292929;
			// display: flex;
			// padding-top: 15px;
			// padding-left: 10px;
			// padding-bottom: 20px;
			// margin-top: 78px;
			// background: var(--navbar-background);
			// position: fixed;
			// justify-content: start;
			// top: 0;
			// height: min-content;
			// width: 100vw;
			// z-index: 100;
			// user-select: none;
			// flex-direction: column;
			border-top: 1px solid #292929;
			border-bottom: 1px solid #292929;
			display: flex;
			padding: 20px 0;
			margin-top: 0px;
			background-color: var(--navbar-background);
			position: sticky;
			justify-content: start;
			height: min-content;
			// width: 100vw;
			width: 100%;
			z-index: 100;
			user-select: none;
			flex-direction: column;

			:global(.navbar-link:not(:last-child)) {
				margin-bottom: 15px;
			}
		}
	}

	.menu-toggle {
		background: none;
		border: none;
		padding: 0;
		margin: 0;
	}

	.menu-toggle-icon {
		fill: var(--html-color);
		height: 18px;
		width: 18px;
		cursor: pointer;
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

	@media only screen and (min-width: 531px) {
		.menu-toggle {
			display: none;
		}
	}

	@media only screen and (max-width: 530px) {
		.navbar {
			display: grid;
			grid-template-columns: 1fr;
		}

		.navbar-links {
			display: none;
		}

		.navbar-logo-container {
			display: grid;
			height: 50px;
			align-items: center;
		}

		.menu-toggle {
			position: absolute;
			top: 0;
			right: 0;
			margin-top: 18px;
			margin-right: 15px;
			z-index: 200;
		}
	}
</style>
