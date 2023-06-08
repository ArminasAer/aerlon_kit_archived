<script lang="ts">
	import Logo from './Logo.svelte';
	import NavLinks from './NavLinks.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let open = false;
	let visible = true;
</script>

<div class="navigation-container">
	<nav class:visible={visible || open} class:open class="navbar" id="navbar">
		<div class="navbar-main-logo">
			<Logo />
		</div>
		<div aria-expanded={open} class="navbar-links">
			<NavLinks setClass="" />
		</div>
		<button class="menu-toggle" class:open on:click={() => (open = !open)}>
			<svg class="icon" width="1em" height="1em" />
		</button>
		<div aria-expanded={open} class="navbar-theme-toggle">
			<div class="theme-toggle">
				<ThemeToggle />
			</div>
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
			display: flex;
			padding-top: 15px;
			padding-left: 10px;
			margin-top: 55px;
			background: var(--navbar-background);
			position: fixed;
			justify-content: start;
			// align-items: left;
			top: 0;
			height: 200px;
			width: 100vw;
			z-index: 100;
			user-select: none;
			transition: transform 0.2s;
			flex-direction: column;
			gap: 20px;

			::after {
				content: '';
			}
		}
	}

	.navbar-theme-toggle {
		margin-right: 15px;
		width: 100%;
		display: flex;
		justify-content: end;

		&[aria-expanded='true'] {
			margin-right: 0px;
			display: flex;
			margin-top: 400px;
			position: fixed;
			justify-content: center;
			justify-items: center;
			// top: 0;
			// height: 200px;
			// width: 100vw;
			z-index: 100;
		}
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
			top: 5;
			right: 0;
			margin-right: 15px;
			// line-height: 1;
			z-index: 200;
		}
	}
</style>
