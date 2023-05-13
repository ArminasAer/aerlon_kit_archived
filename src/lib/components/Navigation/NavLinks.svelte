<script lang="ts">
	import NavLink from './NavLink.svelte';

	export let setClass: string;
</script>

<NavLink {setClass} href="/" title="Blog" />
<NavLink {setClass} href="/series" title="Series" />
<NavLink {setClass} href="/benchmarks" title="Benchmarks" />
<NavLink {setClass} href="/rng" title="RNG" />
<NavLink {setClass} href="/readme" title="Readme" />
