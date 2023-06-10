<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;
	export let title: string;
</script>

<a {href} class={`navbar-link`} class:active={$page.url.pathname === href}>
	{title}
</a>

<style lang="scss">
	.navbar-link {
		width: min-content;
		padding: 0px 10px;
		font-size: 17px;
		font-weight: 400;
		line-height: 1;
		color: var(--navbar-link);
		text-decoration: none;
		-webkit-user-select: none; /* Safari */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE10+/Edge */
		user-select: none; /* Standard */

		@media (hover: hover) {
			&:hover {
				color: var(--navbar-link-hover);
			}
		}

		&.active {
			color: var(--navbar-link-hover);
		}
	}
</style>
