<script lang="ts">
	import dayjs from 'dayjs';
	import type { PageData } from './$types';

	import './markdown.scss';

	export let data: PageData;
</script>

<div class="blog-container">
	<div class="markdown-container">
		<h2 class="title">{data.post?.title}</h2>
		<h4 class="date">{dayjs(data.post?.date).format('MMMM D, YYYY')}</h4>
		{#each data.post?.categories as category}
			<span>{category}{' / '}</span>
		{/each}
		<div>{@html data.post?.markdown}</div>
	</div>
</div>

<style lang="scss">
	.blog-container {
		margin: 0;
	}

	.title {
		text-align: center;
		font-size: 40px;
	}

	.date {
	}

	.markdown-container {
		margin-left: auto;
		margin-right: auto;
		max-width: 56rem;
		word-wrap: break-word;
		font-size: 20px;
		font-weight: 400;
	}

	@media screen and (max-width: 960px) {
		.blog-container {
			margin: 0 5%;
		}
	}

	@media screen and (max-width: 768px) {
		.title {
			font-size: 35px;
		}
	}

	@media screen and (max-width: 450px) {
		.markdown-container {
			font-size: 17px;
		}

		.title {
			font-size: 30px;
		}
	}
</style>
