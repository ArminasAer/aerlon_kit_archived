<script>
	import { page } from '$app/stores';

	console.log($page);
</script>

<div class="containter">
	<h1 class="status">{$page.status}</h1>
	<span class="message">{$page.error?.message}</span>
</div>

<style lang="scss">
	.containter {
		display: grid;
		justify-items: center;
	}

	.status {
		color: #e72929;
	}
</style>
