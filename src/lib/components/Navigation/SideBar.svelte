<script lang="ts">
	import NavLinks from './NavLinks.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let activeSideBar: boolean = false;
</script>

<svelte:window
	on:click={(e) => {
		if (e.target instanceof HTMLElement) {
			if (e.target.closest('#themer-dropdown-content')) return;
		}
		activeSideBar = false;
	}}
	on:touchmove={(e) => {
		if (e.target instanceof HTMLElement) {
			if (e.target.closest('#themer-dropdown-content')) return;
		}
		activeSideBar = false;
	}}
/>

<div class="themer-container">
	<div class="themer-dropdown">
		<button
			class="themer-dropdown-button"
			on:click|stopPropagation={() => (activeSideBar = !activeSideBar)}
		>
			<svg
				class="themer-dropdown-button-icon"
				width="100%"
				height="100%"
				viewBox="0 0 177 168"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
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
		<div class:show={activeSideBar} class="themer-dropdown-content" id="themer-dropdown-content">
			<ThemeToggle />
			<div class="side-navbar">
				<NavLinks setClass="sidenav" />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.side-navbar {
		display: none;
	}

	.themer-container {
		display: flex;
		justify-self: flex-end;
		margin-top: 20px;
		margin-right: 15px;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 15;
	}

	.themer-dropdown {
		height: 18px;
		width: 18px;
		align-self: center;
		// margin: 0 10px;
	}

	.themer-dropdown-button {
		background: none;
		border: none;
		padding: 0;
		margin: 0;
	}

	.themer-dropdown-button-icon {
		fill: var(--navbar-settings);
		height: 18px;
		width: 18px;
		cursor: pointer;
	}

	@media (hover: hover) and (pointer: fine) {
		.themer-dropdown-button-icon:hover {
			fill: var(--theme-main-color);
			// transform: rotate(90deg);
		}
	}

	.themer-dropdown-content {
		position: fixed;
		display: flex;
		justify-content: center;
		width: 150px;
		top: 0;
		right: -150px;
		transition: right 0.3s ease;
		border-left: 2px solid rgb(41, 41, 41);
		background-color: var(--themer-content-background);
		overflow: auto;
		z-index: 1;
		color: #fff;
		height: 100vh;

		text-align: center;

		&.show {
			position: fixed;
			right: 0;
		}

		&:focus {
			outline: 0;
		}
	}

	@media only screen and (max-width: 530px) {
		.themer-dropdown-content {
			flex-direction: column;
			justify-content: start;
		}

		.themer-container {
			margin-right: 24px;
		}

		.side-navbar {
			display: flex;
			flex-direction: column;
			margin-top: 5px;
			padding: 0px 10px;
		}
	}
</style>
