<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="main-container">
	<h3>Information about the website, source code, and coder will go here</h3>
	{@html data.readme}
</div>

<style lang="scss">
	.main-container {
		display: flex;
		flex-direction: column;
		margin-left: 6%;
		margin-right: 6%;
		align-items: center;
		margin-bottom: 20px;
		text-align: center;
	}

	@media only screen and (min-width: 400px) {
		.main-container {
			margin-left: 10%;
			margin-right: 10%;
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

	@media only screen and (min-width: 1350px) {
		.main-container {
			margin-left: 30%;
			margin-right: 30%;
		}
	}
</style>
