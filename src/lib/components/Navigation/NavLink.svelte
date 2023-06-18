<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;
	export let title: string;
	export let stationLink: boolean = false;
</script>

<a
	{href}
	class="navbar-link"
	class:active={$page.url.pathname === href}
	class:station={stationLink}
>
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

		&.station {
			font-size: 20px;
			color: var(--theme-main-color);
			&:hover {
				color: #97dba8;
			}
		}

		&.active {
			color: var(--navbar-link-hover);
		}

		@media (hover: hover) {
			&:hover {
				color: var(--navbar-link-hover);
			}
		}
	}
</style>
