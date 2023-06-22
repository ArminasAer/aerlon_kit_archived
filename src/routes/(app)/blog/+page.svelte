<script lang="ts">
	import { slide } from 'svelte/transition';
	import Card from './Card.svelte';

	import type { PageData } from './$types';

	let collapsed: boolean = true;

	export let data: PageData;
</script>

<div class="main-container">
	<div class="cards-container">
		<div class="featured-container">
			<div class="featured-header" class:collapsed>
				<div class="featured-title">Featured Posts</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div>
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<svg
						on:click={() => (collapsed = !collapsed)}
						class="feature-collapse-button"
						class:collapsed
						width="100%"
						height="100%"
						viewBox="0 0 276 169"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						xml:space="preserve"
						style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
						><path
							d="M137.997,119.798l137.998,-119.798l-0,49.008l-137.998,119.798l-137.997,-119.798l0,-49.008l137.997,119.798l0,-119.798l0,119.798Z"
						/></svg
					>
				</div>
			</div>

			{#if collapsed}
				<div transition:slide|local={{ duration: 400 }} class="featured-posts-container">
					{#each data.metaList.filter((m) => m.featured) as meta (meta.fileName)}
						<Card {meta} />
					{/each}
				</div>
			{/if}
		</div>
		<div class="posts-container">
			{#each data.metaList.filter((m) => !m.featured) as meta (meta.fileName)}
				<Card {meta} />
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.main-container {
		display: flex;
		flex-direction: column;
		margin-left: 4%;
		margin-right: 4%;
		align-items: center;
		margin-bottom: 20px;
	}

	.cards-container {
		display: grid;
		justify-items: center;
		justify-content: center;
	}

	.featured-container {
		padding: 15px 15px;
		background: var(--card-featured-background);
		border: 1px solid var(--card-featured-border);
		border-radius: 0.4rem;
		margin-bottom: 20px;
		width: 100%;
	}

	.featured-header {
		display: flex;
	}

	.featured-title {
		flex-grow: 1;
		font-size: 20px;
	}

	.feature-collapse-button {
		fill: white;
		display: grid;
		width: 15px;
		height: 15px;
		transition: fill 300ms, transform 300ms;
		transform: rotateX(180deg);

		&:hover {
			// fill: purple;
			cursor: pointer;
		}

		&.collapsed {
			transform: rotateX(0deg);
		}
	}

	.featured-posts-container {
		// height: min-content;
		margin-top: 10px;
		gap: 15px;
	}

	.posts-container {
		gap: 15px;
	}

	@media only screen and (min-width: 400px) {
		.main-container {
			margin-left: 5%;
			margin-right: 5%;
		}
	}

	@media only screen and (min-width: 600px) {
		.main-container {
			margin-left: 7%;
			margin-right: 7%;
		}
	}

	@media only screen and (min-width: 800px) {
		.main-container {
			margin-left: 10%;
			margin-right: 10%;
		}

		.posts-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			// gap: 15px;
		}

		.featured-posts-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			// gap: 15px;
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
</style>
