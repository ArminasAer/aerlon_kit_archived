<script lang="ts">
	import type { meta } from '$lib/server/models/meta';
	import dayjs from 'dayjs';

	export let meta: meta;
</script>

<div class="card">
	<div class="card-header-info">
		<div>
			<span class="card-date">
				{dayjs(meta.date).format('MMMM D, YYYY')}
			</span>
		</div>
		<div class="card-header">
			<a class="card-header-anchor" href={`/blog/${meta.fileName}`}>
				<span class="card-title">{meta.title}</span>
			</a>
		</div>
		<div class="card-snippet-container">
			<span class="card-snippet">{meta.postSnippet}</span>
		</div>
	</div>
	<span class="card-categories">
		{#each meta.categories as category}
			<a class="card-category" href={`/category/${category}`}>
				<span class="card-category-info">{category}</span>
			</a>
		{/each}
	</span>
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		// padding: 20px 20px 0 20px;
		width: 100%;
		margin-bottom: 20px;
		-webkit-user-select: none; /* Safari */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE10+/Edge */
		user-select: none; /* Standard */
	}

	.card-header-info {
		width: 100%;
		display: grid;
		margin-bottom: 7px;
		line-height: 1.425;
	}

	.card-header-anchor {
		text-decoration: none;
	}

	.card-title {
		color: var(--card-title);
		font-size: 20px;
		font-weight: 700;
		word-wrap: break-word;
		overflow-wrap: break-word;
		-webkit-hyphens: auto;
		-moz-hyphens: auto;
		hyphens: auto;

		&::first-letter {
			text-transform: uppercase;
		}

		&:hover {
			color: var(--card-title-hover);
		}
	}

	.card-date {
		font-size: 16px;
		color: var(--card-date);
	}

	.card-snippet {
		font-size: 16px;
		color: var(--card-date);
	}

	.card-categories {
		display: flex;
		flex-wrap: wrap;
		row-gap: 6px;
		column-gap: 6px;
	}

	.card-category {
		text-decoration: none;
		display: grid;
	}

	.card-category-info {
		background: var(--card-category-info);
		border-radius: 0.25rem;
		font-size: 13px;
		color: #fafafa;
		padding: 4px 8px;

		&:hover {
			background: var(--card-category-hover-background);
		}
	}

	@supports (-webkit-touch-callout: none) and (not (translate: none)) {
		.card-category:not(:last-child) {
			margin-right: 6px;
		}
	}
</style>
