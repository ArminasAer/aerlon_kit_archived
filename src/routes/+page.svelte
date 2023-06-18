<script lang="ts">
	import NavLink from '$lib/components/Navigation/NavLink.svelte';
</script>

<div class="main-container">
	<div class="station">
		<h1 class="title">Aerlon</h1>
		<h3 class="description">
			An airship station where all knowledge and wisdom are shared upon all voyagers
		</h3>
		<h4 class="selector">Choose what vessel to journey on:</h4>
		<div class="vessels">
			<NavLink stationLink={true} href="/blog" title="Blog" />
			<NavLink stationLink={true} href="/benchmarks" title="Benchmarks" />
			<NavLink stationLink={true} href="/rng" title="RNG" />
			<NavLink stationLink={true} href="/about" title="About" />
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
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		margin: 0;
		padding: 0;
	}

	.station {
		text-align: center;
		display: grid;
	}

	.title {
		font-size: 50px;
		color: var(--theme-main-color);
		margin-top: 25px;
		margin-bottom: 25px;
	}

	.description {
		line-height: 1.75;
		max-width: 450px;
		margin-bottom: 25px;
	}

	.selector {
		margin-bottom: 25px;
	}
</style>
