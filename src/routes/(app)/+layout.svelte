<script lang="ts">
	import './common.scss';

	import Navbar from '$lib/components/Navigation/NavBar.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { navigating } from '$app/stores';
	import { fade } from 'svelte/transition';

	// progress bar value
	const p = tweened(0, {
		duration: 200,
		easing: cubicOut
	});

	let isVisible = false;

	function increase() {
		if ($p >= 0 && $p < 0.2) {
			p.update((_) => _ + 0.04);
		} else if ($p >= 0.2 && $p < 0.5) {
			p.update((_) => _ + 0.02);
		} else if ($p >= 0.5 && $p < 0.8) {
			p.update((_) => _ + 0.002);
		} else if ($p >= 0.8 && $p < 0.99) {
			p.update((_) => _ + 0.0005);
		} else {
			p.set(0);
		}

		if ($navigating) {
			const rand = Math.round(Math.random() * (300 - 50)) + 50;
			setTimeout(function () {
				increase();
			}, rand);
		}
	}

	$: {
		if ($navigating) {
			increase();
			isVisible = true;
		}
		if (!$navigating) {
			p.update((_) => _ + 0.3);
			setTimeout(function () {
				p.set(1);
				setTimeout(function () {
					isVisible = false;
					p.set(0);
				}, 100);
			}, 100);
		}
	}
</script>

{#if $p > 0 && $p < 1 && isVisible}
	<progress value={$p} transition:fade={{ duration: 300 }} />
{/if}
<Navbar />

<div class="wip-container">
	<div class="wip">
		<span class="wip-title">Site is under active development!</span>
		<span class="wip-details">Many things are broken or placeholder</span>
	</div>
</div>

<slot />

<style lang="scss">
	progress {
		--bar-color: rgba(255, 255, 255, 0.3);
		position: fixed;
		top: 0;
		z-index: 99999;
		left: 0;
		height: 3px;
		width: 100vw;
		border-radius: 0;
	}

	/* bar: */
	progress::-webkit-progress-bar {
		background-color: var(--bar-color);
		width: 100%;
	}

	progress {
		background-color: var(--bar-color);
	}

	/* value: */
	progress::-webkit-progress-value {
		background-color: var(--theme-main-color) !important;
	}

	progress::-moz-progress-bar {
		background-color: var(--theme-main-color) !important;
	}

	progress {
		color: var(--theme-main-color);
	}

	.wip-container {
		display: grid;
	}

	.wip {
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-self: center;
		width: max-content;
		padding: 15px 15px 15px 15px;
		background: #ffa60010;
		border: 1px solid #ffa500;
		border-radius: 0.4rem;
		margin-bottom: 20px;
		height: min-content;
	}

	.wip-title {
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 5px;
		-webkit-animation: colorchange 20s infinite ease-in;
	}

	@-webkit-keyframes colorchange {
		0% {
			color: #ffffff;
		}

		25% {
			color: #ffbc04;
		}

		50% {
			color: #ff3604;
		}

		75% {
			color: #ffbc04;
		}

		100% {
			color: #ffffff;
		}
	}
</style>
