<script lang="ts">
	import type { PageData } from './$types';
	import Card from './Card.svelte';

	export let data: PageData;
</script>

<div class="main-container">
	<div class="cards-container">
		{#each data.posts.filter((p) => p.featured) as post (post.slug)}
			<div class="featured-posts">
				<Card {post} />
			</div>
		{/each}
		{#each data.posts.filter((p) => !p.featured) as post (post.slug)}
			<Card {post} />
		{/each}
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
		grid-template-columns: auto;
		justify-items: center;
		justify-content: center;
	}

	.featured-posts {
		padding: 10px 10px 0px 10px;
		background: var(--card-featured-background);
		border: 1px solid var(--card-featured-border);
		border-radius: 0.4rem;
		margin-bottom: 20px;
		height: min-content;
	}

	@media only screen and (min-width: 400px) {
		.main-container {
			margin-left: 5%;
			margin-right: 5%;
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
</style>
