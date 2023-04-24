<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import Textform from '$lib/textform.svelte';
	import '$lib/log_styles.css';
	export let form: ActionData;
</script>

<div class="reg-box">
	<h1 class="title">Registration</h1>
	<form action="?/register" method="POST" use:enhance>
		<div>
			<Textform
				name="username"
				inputId="username"
				titleText="Username"
				placeholder="Enter your username:"
			/>
		</div>

		<div>
			<Textform
				name="password"
				inputId="password"
				inputType="password"
				titleText="Password"
				placeholder="Your password:"
			/>
		</div>

		{#if form?.user}
			<p class="error">This username is taken.</p>
		{/if}

		<center>
			<button type="submit" class="registerbtn">Register</button>
		</center>
	</form>
</div>
