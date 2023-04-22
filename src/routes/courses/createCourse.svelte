<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Textform from '$lib/textform.svelte';

	export let functionTitle: string;
	export let course = {
		id: 0,
		title: '',
		descr: '',
		details: '',
		from: '',
		to: '',
		period: '',
		schedule: [],
		category: '',
		assignments: []
	};

	let form: HTMLFormElement;

	const dispatch = createEventDispatcher();

	async function handleSubmit(event) {
		event.preventDefault();
		dispatch('createCourse');
		console.log(course);

		ClearFields();
	}

	export function ClearFields() {
		form.reset();
	}
</script>

<form id="form" on:submit={handleSubmit} bind:this={form}>
	<center><h2>{functionTitle}</h2></center>
	<Textform
		bind:bindVar={course.title}
		inputId="title"
		titleText="Course title:"
		placeholder="Write your course title: "
	/>

	<Textform
		bind:bindVar={course.details}
		inputId="details"
		titleText="Information about the course:"
		placeholder="Course description: "
	/>

	<div class="row_direction">
		<label for="from">From:</label>
		<input
			class="horizontally_margin"
			type="datetime-local"
			id="from"
			name="from"
			max={course.to}
			bind:value={course.from}
			required
		/>
	</div>
	<div class="row_direction">
		<label for="to">To:</label>
		<input
			class="horizontally_margin"
			type="datetime-local"
			id="to"
			min={course.from}
			name="to"
			bind:value={course.to}
			required
		/>
	</div>

	<!--create schedule day choose from drop down list-->

	<div class="column_direction">
		<label for="period">Period:</label>
		<select
			name="period"
			id="period"
			bind:value={course.schedule}
			multiple
			class="horizontally_margin"
			required
		>
			<option value="Monday">Monday</option>
			<option value="Tuesday">Tuesday</option>
			<option value="Wednesday">Wednesday</option>
			<option value="Thursday">Thursday</option>
			<option value="Friday">Friday</option>
			<option value="Saturday">Saturday</option>
			<option value="Sunday">Sunday</option>
		</select>
	</div>

	<!--create select of category-->

	<div class="row_direction">
		<label for="category">Category:</label>
		<select
			name="category"
			id="category"
			bind:value={course.category}
			class="horizontally_margin"
			required
		>
			<option value="Math">Math</option>
			<option value="English">English</option>
			<option value="Science">Science</option>
			<option value="History">History</option>
			<option value="Art">Art</option>
			<option value="Music">Music</option>
			<option value="PE">PE</option>
			<option value="Other">Other</option>
		</select>
	</div>

	<!--create period select from drop down list-->

	<div class="row_direction">
		<label for="period">Period:</label>
		<select
			name="period"
			id="period"
			bind:value={course.period}
			class="horizontally_margin"
			required
		>
			<option value="1">Period 1</option>
			<option value="2">Period 2</option>
			<option value="3">Period 3</option>
			<option value="4">Period 4</option>
			<option value="5">Period 5</option>
			<option value="6">Period 6</option>
		</select>
	</div>
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
