<script lang="ts">
	let rng: number = 0;
	const randomize = () => {
		rng = Math.floor(Math.random() * 101);
	};
</script>

<div class="main-container">
	<h3>{rng}</h3>
	<button on:click={randomize}>Randomize</button>
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

	button {
		color: #fff;
		background: #161b22;
		border: 1px solid #30363d;
		padding: 0.25rem 1rem;
		border-radius: 0.25rem;
		font-family: inherit;
		font-size: 15px;
		font-weight: 500;
		align-self: center;
		cursor: pointer;
		-webkit-user-select: none; /* Chrome all / Safari all */
		-moz-user-select: none; /* Firefox all */
		-ms-user-select: none; /* IE 10+ */
		user-select: none;
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

		@media (hover: hover) and (pointer: fine) {
			&:hover {
				outline: 0;
				background: #26ff55;
				color: #30363d;
			}
		}

		&:focus:active {
			outline: 0;
			background: #26ff55;
			color: #30363d;
		}
	}

	@media only screen and (min-width: 400px) {
		.main-container {
			margin-left: 10%;
			margin-right: 10%;
		}
	}

	@media only screen and (min-width: 600px) {
		.main-container {
			margin-left: 15%;
			margin-right: 15%;
		}
	}

	@media only screen and (min-width: 800px) {
		.main-container {
			margin-left: 10%;
			margin-right: 10%;
		}
	}

	@media only screen and (min-width: 1025px) {
		.main-container {
			margin-left: 10%;
			margin-right: 10%;
		}
	}

	@media only screen and (min-width: 1281px) {
		.main-container {
			margin-left: 20%;
			margin-right: 20%;
		}
	}

	@media only screen and (min-width: 1350px) {
		.main-container {
			margin-left: 30%;
			margin-right: 30%;
		}
	}
</style>
