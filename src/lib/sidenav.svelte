<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
</script>

<div>
	<header>
		<div class="horizontally-margin">
			<h1 class="title">Academic Assignment Management</h1>
			<nav>
				<ul>
					<li><a href="{base}/assignments">Assignments</a></li>
					<li><a href="{base}/classes">Classes</a></li>
					{#if !$page.data.user}
						<li><a href="{base}/login">Login</a></li>
						<li><a href="{base}/register">Register</a></li>
					{:else}
						<li>
							<form action="/logout" method="POST">
								<button type="submit" class="logout">Log out</button>
							</form>
						</li>
					{/if}
				</ul>
			</nav>
		</div>
	</header>
</div>

<style>
	.horizontally-margin {
		margin: 0 20px;
		display: flex;
		justify-content: space-between;
	}
	.title {
		font-size: 30px;
		margin: 0.8em;
	}

	/* Header */
	.logout {
		background-color: #4c4c49; /* Green */
		border: none;
		color: white;
		text-align: center;
		text-decoration: none;
		display: inline-block;
	}

	.logout:hover {
		background-color: #292520;
		transition: all 0.06s ease-in;
	}

	.logout:active {
		background-color: #292520;
		transition: all 0.06s ease-in;
		transform: scale(0.9);
	}

	header {
		background-color: #333;
		color: #fff;
	}

	header h1 {
		margin: 0;
	}

	/* Navigation */
	nav {
		text-align: center;
	}

	nav ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	nav li {
		display: inline-block;
		margin-right: 20px;
	}

	nav a {
		color: #f7f6f6;
		text-decoration: none;
	}

	nav a:hover {
		text-decoration: underline;
	}
</style>
