<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;
	export let title: string;
	export let setClass: string;
</script>

<a {href} class={`navbar-link ${setClass}`} class:active={$page.url.pathname === href}>
	{title}
</a>

<style lang="scss">
	.navbar-link {
		align-self: center;
		padding: 0px 5px;
		font-size: 17px;
		font-weight: 500;
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

	.sidenav {
		margin-bottom: 10px;
		color: #ffffff;

		:not(:last-child) {
			margin-bottom: 0;
		}
	}
</style>
