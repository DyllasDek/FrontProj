<script lang="ts">
	import type { ActionData } from './$types';
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import Textform from '$lib/textform.svelte';
	import '$lib/log_styles.css';
	export let form: ActionData;
</script>

<div class="reg-box">
	<h1 class="title">Login</h1>
	<form
		action="?/login"
		method="POST"
		use:enhance={() => {
			return async ({ result }) => {
				// rerun the `load` function for the page
				// https://kit.svelte.dev/docs/modules#$app-navigation-invalidateall
				invalidateAll();

				// since we're customizing the default behaviour
				// we don't want to reimplement what `use:enhance` does
				// so we can use `applyResult` and pass the `result`
				await applyAction(result);
			};
		}}
	>
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

		{#if form?.invalid}
			<p class="error">Username and password is required.</p>
		{/if}

		{#if form?.credentials}
			<p class="error">You have entered the wrong credentials.</p>
		{/if}

		<center><button type="submit" class="registerbtn">Log in</button></center>
	</form>
</div>
