<div class="main-container">
	<div class="navbar-container">
		<svg
			viewBox="0 0 1500 1500"
			version="1.1"
			style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
		>
			<path id="shape_fill" d="M1500,750l-750,-750l-750,750l750,750l750,-750Z" style="fill:none;" />
			<g>
				<g>
					<path
						class="navbar-logo-inner"
						d="M1185.85,749.999l-435.926,-435.923l-298.059,298.059l167.329,-0l130.977,-130.978l268.811,268.842l-268.811,268.844l-130.977,-130.978l-167.329,0l298.059,298.059l435.926,-435.925Z"
					/>
					<path
						class="navbar-logo-outer"
						d="M590.109,802.2l0.001,-104.4l-369.145,0l529.084,-529.084l449.843,449.842l168.666,0l-618.558,-618.558l-750,750l750,750l618.558,-618.558l-168.666,-0l-449.843,449.842l-529.084,-529.084l369.144,-0Z"
					/>
				</g>
			</g>
		</svg>
	</div>
	<div class="home-content">
		<h3>Blog and HTTP Benchmarking site</h3>
		<h4>
			My goal is to benchmark HTTP libraries across large sets of languages, hardware and data
			structures...
		</h4>
	</div>
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

	.navbar-container {
		height: 175px;
		width: 175px;
		margin-bottom: 5px;
	}

	.navbar-logo-outer {
		fill: var(--navbar-logo-outer);
	}

	.navbar-logo-inner {
		fill: var(--navbar-logo-inner);
	}

	.home-content {
		text-align: center;
	}
</style>
