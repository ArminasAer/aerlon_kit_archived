<script lang="ts">
	import './common.scss';

	let version = __APP_VERSION__;
</script>

<div class="wip-container">
	<div class="wip">
		<span class="wip-title">Alpha: {version}</span>
	</div>
</div>

<slot />

<style lang="scss">
	.wip-container {
		width: 100%;
	}

	.wip {
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-self: center;
		background: #ffa60010;
		border-bottom: 1px solid #ffa500;
		border-top: 1px solid #ffa500;
		height: min-content;
	}

	.wip-title {
		font-size: 15px;
		font-weight: 400;
		padding: 4px 0;
		line-height: 1;
	}
</style>
