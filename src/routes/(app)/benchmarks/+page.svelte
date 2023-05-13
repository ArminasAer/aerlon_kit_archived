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

<h3>HTTP Benchmarks</h3>

<button on:click={builder}>Build</button>
