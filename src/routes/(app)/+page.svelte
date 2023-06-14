<script lang="ts">
	import type { PageData } from './$types';

	import './snippet.scss';

	export let data: PageData;
</script>

<div class="main-container">
	<div class="home-content">
		<h1 class="title">The Tech Privateer</h1>
		<h2>Blog and HTTP Benchmarking</h2>
		<h3>
			My goal is to benchmark HTTP libraries across large sets of languages, hardware and data
			structures...
		</h3>
		<!-- <div class="main-snippet">
			{@html data.markdown}
		</div> -->
	</div>
</div>

<style lang="scss">
	.main-container {
		display: flex;
		flex-direction: column;
		margin-left: 4%;
		margin-right: 4%;
		align-items: center;
	}

	.title {
		font-size: 40px;
		color: var(--theme-main-color);
	}

	.home-content {
		text-align: center;
		display: grid;
	}

	.main-snippet {
		display: grid;
		justify-content: center;
		// max-width: 560px;
		margin: auto;
	}
</style>
