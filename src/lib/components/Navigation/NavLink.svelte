<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;
	export let title: string;
	export let setClass: 'sidenav' | '';
</script>

<a {href} class={`navbar-link ${setClass}`} class:active={$page.url.pathname === href}>
	{title}
</a>

<style lang="scss">
	.navbar-link {
		align-self: center;
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

	.sidenav {
		margin-bottom: 15px;
		color: #fff;
		font-weight: 300;
		align-self: flex-start;

		&.active {
			color: var(--navbar-link-hover);
		}

		&:last-child {
			margin-bottom: 0;
		}
	}
</style>
