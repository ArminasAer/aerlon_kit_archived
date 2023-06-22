<script lang="ts">
	import Logo from './Logo.svelte';
	import NavLink from './NavLink.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

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
		<div class="navbar-main-logo">
			<!-- <Logo /> -->
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
		<div aria-expanded={open && visible} class="navbar-theme-toggle">
			<div class="theme-toggle">
				<ThemeToggle />
			</div>
		</div>
	</nav>
</div>

<style lang="scss">
	.navigation-container {
		z-index: 100;
		display: grid;
		position: sticky;
		top: 25px;
		width: 100%;
		margin-bottom: 15px;
		background-color: var(--navbar-background);
		box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
	}

	.navbar {
		display: flex;
		align-items: center;
		height: 55px;
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

		&[aria-expanded='true'] {
			border-top: 1px solid #292929;
			border-bottom: 1px solid #292929;
			display: flex;
			padding-top: 15px;
			padding-left: 10px;
			padding-bottom: 20px;
			margin-top: 78px;
			background: var(--navbar-background);
			position: fixed;
			justify-content: start;
			top: 0;
			height: min-content;
			width: 100vw;
			z-index: 100;
			user-select: none;
			flex-direction: column;

			:global(.navbar-link:not(:last-child)) {
				margin-bottom: 15px;
			}
		}
	}

	.navbar-theme-toggle {
		margin-right: 15px;
		width: 100%;
		display: flex;
		justify-content: end;

		&[aria-expanded='true'] {
			margin-top: 106px;
			display: block;
			width: min-content;
			position: absolute;
			right: 0;
			z-index: 100;
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
			justify-content: start;
		}

		.navbar-links {
			display: none;
		}

		.navbar-theme-toggle {
			display: none;
		}

		.navbar-main-logo {
			width: min-content;
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
