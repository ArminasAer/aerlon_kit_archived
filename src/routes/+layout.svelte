<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { navigating } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	import './common.scss';

	inject({ mode: dev ? 'development' : 'production' });

	// progress bar value
	const p = tweened(0, {
		duration: 200,
		easing: cubicOut
	});

	let isVisible = false;
	let version = __APP_VERSION__;

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
			setTimeout(() => {
				if ($navigating) {
					increase();
					isVisible = true;
				}
			}, 1000);
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

<div class="wip-container">
	<span class="wip-title">Version {version}α</span>
</div>

<slot />

<style lang="scss">
	.wip-container {
		width: 100%;
		position: sticky;
		top: 0;
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-self: center;
		background: #312f2a;
		border-bottom: 1px solid #ffa500;
		border-top: 1px solid #ffa500;
		height: min-content;
		color: #fff;
	}

	.wip-title {
		font-size: 15px;
		font-weight: 400;
		padding: 4px 0;
		line-height: 1;
	}

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
</style>
