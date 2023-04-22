<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Textform from '$lib/textform.svelte';
	import { createAssignment } from './+page';

	export let functionTitle: string;
	export let assignment = {
		id: 0,
		title: '',
		details: '',
		due: '',
		progress: 75,
		completed: true
	};

	let form: HTMLFormElement;

	const dispatch = createEventDispatcher();

	async function handleSubmit(event) {
		event.preventDefault();
		dispatch('submitAssignment');
		console.log(assignment);

		ClearFields();
	}

	export function ClearFields() {
		form.reset();
	}
</script>

<form id="form" on:submit={handleSubmit} bind:this={form}>
	<center><h2>{functionTitle}</h2></center>
	<Textform
		bind:bindVar={assignment.title}
		inputId="title"
		titleText="Assignment title:"
		placeholder="Write your assignment title: "
	/>

	<Textform
		bind:bindVar={assignment.details}
		inputId="details"
		titleText="Information about the assignment:"
		placeholder="Additional details: "
	/>

	<div class="column_direction">
		<div><label for="course"> Assignment for course:</label></div>
		<div>
			<select name="course" id="course" class="vertically_margin" required>
				<option value="1">Course 1</option>
				<option value="2">Course 2</option>
				<option value="3">Course 3</option>
			</select>
		</div>
	</div>

	<div class="row_direction">
		<div>
			<input
				name="progress"
				type="range"
				min="0"
				max="100"
				bind:value={assignment.progress}
				required
			/>
		</div>
		<div>
			<label for="progress" class="horizontally_margin"
				>Current progress: {assignment.progress}%</label
			>
		</div>
	</div>
	<div class="row_direction">
		<label for="completed">Completed? </label>
		<input
			class="horizontally_margin"
			type="checkbox"
			bind:value={assignment.completed}
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
			bind:value={assignment.due}
			required
		/>
	</div>
	<!--add dropdown list with courses here-->

	<!-- Add any additional form fields for assignments here -->
	<button type="submit">{functionTitle}</button>
</form>

<style>
	.row_direction {
		margin: 1em 3em 0 1em;
		display: flex;
		flex-direction: row;
	}
	.column_direction {
		margin: 1em 3em 0 1em;
		display: flex;
		flex-direction: column;
	}
	.horizontally_margin {
		margin: 0 0 0.2em 1em;
	}
	.vertically_margin {
		margin: 0.5em 0 0 0;
	}
	select {
		font-size: 16px;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
		transition: all 0.3s ease-in-out;
	}

	select:hover {
		outline: none;
		border-color: #878788;
		transition: all 0.3s ease-in-out;
	}

	select:focus {
		outline: none;
		border: none;
		background-color: rgb(243, 243, 243);
		border-bottom: 2px solid #31427d;
		transition: all 0.15s ease-in-out;
	}
</style>
