<script lang="ts">
	import { onMount } from 'svelte';
	import NavLinks from './NavLinks.svelte';

	let activeSideBar: boolean = false;

	onMount(() => {
		const storageTheme = localStorage.getItem('theme') || 'dark';
		const themeSwitcherInput = document.querySelector('#themeSwitch');

		if (storageTheme === 'light') {
			document.documentElement.setAttribute('data-theme', 'light');
			themeSwitcherInput.checked = false;
		} else {
			document.documentElement.setAttribute('data-theme', 'dark');
			themeSwitcherInput.checked = true;
		}

		themeSwitcherInput.addEventListener('change', (e) => {
			if (e.target.checked) {
				localStorage.setItem('theme', 'dark');
				document.documentElement.setAttribute('data-theme', 'dark');
			} else {
				localStorage.setItem('theme', 'light');
				document.documentElement.setAttribute('data-theme', 'light');
			}
		});

		let storageColor = localStorage.getItem('color');
		const colors = document.querySelectorAll('#colors');

		if (!storageColor) {
			localStorage.setItem('color', 'green');
		}

		switch (storageColor) {
			case 'green':
				document.documentElement.setAttribute('data-color', 'green');
				break;
			case 'blue':
				document.documentElement.setAttribute('data-color', 'blue');
				break;
			case 'red':
				document.documentElement.setAttribute('data-color', 'red');
				break;
			case 'orange':
				document.documentElement.setAttribute('data-color', 'orange');
				break;
			case 'pink':
				document.documentElement.setAttribute('data-color', 'pink');
				break;
			case 'purple':
				document.documentElement.setAttribute('data-color', 'purple');
				break;
			default:
				document.documentElement.setAttribute('data-color', 'green');
		}

		colors.forEach((el) => {
			el.addEventListener('click', (e) => {
				let color = e.target.attributes['data-color'].value;

				document.documentElement.setAttribute('data-color', color);
				localStorage.setItem('color', color);
			});
		});
	});
</script>

<svelte:window
	on:click={(e) => {
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
			<div class="side-navbar">
				<span class="themes-container-title">Links</span>
				<NavLinks setClass="sidenav" />
			</div>
			<div class="themer-content-themes-container">
				<div class="themes-container-title">
					<span>Switch Theme</span>
				</div>
				<div class="theme-label">
					<span class="theme-switch-label">Light</span>
					<div class="theme-switcher">
						<label class="theme-switcher-container">
							<input class="theme-switcher-container-input" id="themeSwitch" type="checkbox" />
							<span class="theme-switcher-container-span" />
						</label>
					</div>
					<span class="theme-switch-label">Dark</span>
				</div>
				<div class="themes-container-title">
					<span>Pick a Color</span>
				</div>
				<div class="theme-label">
					<span id="colors" class="theme-div green" data-color="green" />
					<span id="colors" class="theme-div blue" data-color="blue" />
					<span id="colors" class="theme-div red" data-color="red" />
					<span id="colors" class="theme-div orange" data-color="orange" />
					<span id="colors" class="theme-div pink" data-color="pink" />
					<span id="colors" class="theme-div purple" data-color="purple" />
				</div>
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
		// align-self: start;
		margin-right: 20px;
		position: absolute;
		right: 0;
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
		transition: right 0.4s ease;
		background-color: var(--themer-content-background);
		border-left: 1px solid #30363d;
		overflow: auto;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
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

	.themer-content-themes-container {
		margin-top: 5px;
		padding: 0px 10px;
		width: 100%;
	}

	.themes-container-title {
		margin: 9px 0;
		padding-bottom: 4px;
		border-bottom: 1px solid #30363d;
	}

	// placeholder
	.theme-label {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	// placeholder
	.theme-div {
		cursor: pointer;
		height: 30px;
		width: 30px;
		border-radius: 0.2rem;
		margin: 5px 5px;

		&.green {
			background-color: #00dc82;
		}

		&.blue {
			background-color: #0079dc;
		}

		&.red {
			background-color: #dc2100;
		}

		&.orange {
			background-color: #fea501;
		}

		&.pink {
			background-color: #e74392;
		}

		&.purple {
			background-color: #c072d4;
		}
	}

	.theme-switch-label {
		color: #eee;
		font-size: 13px;
		font-weight: 300;
		// padding: 0 10px;
		align-self: center;
		padding-right: 6px;

		&:last-child {
			padding-left: 6px;
			padding-right: 0px;
		}
	}

	.theme-switcher {
		display: flex;
		align-self: center;
		justify-self: center;
	}

	.theme-switcher-container {
		position: relative;
		display: inline-block;
		justify-content: flex-end;
		width: 45px;
		height: 22px;
	}

	.theme-switcher-container-span {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
		border-radius: 0.9rem;
	}

	.theme-switcher-container-span::before {
		position: absolute;
		content: '';
		height: 16px;
		width: 16px;
		left: 3.5px;
		bottom: 3px;
		background-color: #181818;
		transition: 0.4s;
		border-radius: 50%;
	}

	.theme-switcher-container-input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.theme-switcher-container-input:checked + .theme-switcher-container-span::before {
		background-color: #181818;
	}

	.theme-switcher-container-input:checked + .theme-switcher-container-span {
		background-color: #fff;
	}

	.theme-switcher-container-input:checked + .theme-switcher-container-span::before {
		-webkit-transform: translateX(22px);
		-ms-transform: translateX(22px);
		transform: translateX(22px);
	}

	@media only screen and (max-width: 530px) {
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
	}
</style>
