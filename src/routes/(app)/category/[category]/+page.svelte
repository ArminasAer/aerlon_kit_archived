<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<h3>Blog Category</h3>
	<p>{data.post}</p>
</div>
