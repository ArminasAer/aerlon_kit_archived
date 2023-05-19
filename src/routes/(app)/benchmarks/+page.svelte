<script>
	async function builder() {
		const response = await fetch('/api/admin/system', {
			method: 'GET',
			// @ts-ignore
			headers: {
				'content-type': 'application/json'
			}
		});

		console.log(await response.json());
	}
</script>

<div class="main-container">
	<h2>HTTP Benchmarks</h2>
</div>

<style lang="scss">
	.main-container {
		display: flex;
		flex-direction: column;
		margin-left: 6%;
		margin-right: 6%;
		align-items: center;
		margin-bottom: 20px;
	}
</style>
