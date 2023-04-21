<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Textform from '$lib/textform.svelte';

	export let title = '';
	export let details = '';
	export let due = '';
	export let progress = 75;
	export let completed = true;
	let form: HTMLFormElement;
	const dispatch = createEventDispatcher();

	async function handleSubmit(event) {
		event.preventDefault();
		const newAssignment = {
			title,
			details,
			due,
			progress,
			completed
		};
		dispatch('submitAssignment');
		console.log(newAssignment);
		console.log(form);
		ClearFields();
	}
	
	export function ClearFields(){
		form.reset();
	}
	
</script>

<form id="form" on:submit={handleSubmit} bind:this={form}>
	<h2>Create Assignment</h2>
	<Textform
		bind:bindVar={title}
		inputId="title"
		titleText="Course title:"
		placeholder="Write your course title: "
	/>

	<Textform
		bind:bindVar={details}
		inputId="details"
		titleText="Information about the course:"
		placeholder="Additional details: "
	/>

	<div class="row_direction">
		<div>
			<input name="progress" type="range" min="0" max="100" bind:value={progress} required />
		</div>
		<div>
			<label for="progress" class="horizontally_margin">Current progress: {progress}%</label>
		</div>
	</div>
	<div class="row_direction">
		<label for="completed">Completed? </label>
		<input
			class="horizontally_margin"
			type="checkbox"
			bind:value={completed}
			name="completed"
			id="completed"
		/>
	</div>
	<div class="row_direction">
		<label for="due">Due date:</label>
		<input
			class="horizontally_margin"
			type="datetime-local"
			id="due"
			name="due"
			bind:value={due}
			required
		/>
	</div>
	<!-- Add any additional form fields for assignments here -->
	<button type="submit">Create Assignment</button>
</form>

<style>
	.row_direction {
		margin: 1em 3em 0 1em;
		display: flex;
		flex-direction: row;
	}
	.horizontally_margin {
		margin: 0 0 0.2em 1em;
	}
</style>
