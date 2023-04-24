<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Textform from '$lib/textform.svelte';
	import type { Classes, Assignments } from '@prisma/client';
	import '$lib/class_styles.css';

	export let functionTitle: string;
	export let UserId: string;
	export let classes: Classes[];
	export let action: string;
	let date: string;

	export let assignment: Assignments = {
		whoId: UserId,
		id: '',
		assignment: '',
		details: '',
		courseid: '',
		due: new Date(),
		progress: 25,
		completed: false
	};

	if (assignment.id !== '') {
		const d: Date = new Date(assignment.due);
		date = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, -1);
	}

	let form: HTMLFormElement;

	const dispatch = createEventDispatcher();
	export function clearFields() {
		form.reset();
		dispatch('closePopup');
	}
</script>

{#if assignment}
	<form method="POST" id="form" bind:this={form} {action}>
		<input type="hidden" name="assign_uid" value={assignment.id} />
		<center><h2>{functionTitle}</h2></center>

		<Textform
			bind:bindVar={assignment.assignment}
			inputId="title"
			titleText="Assignment title:"
			name="assign"
			placeholder="Write your assignment title: "
		/>

		<Textform
			bind:bindVar={assignment.details}
			inputId="details"
			titleText="Information about the assignment:"
			name="details"
			placeholder="Additional details: "
		/>

		<div class="column_direction">
			<div><label for="course"> Assignment for course:</label></div>
			<div>
				<select name="courseid" id="course" class="vertically_margin" required>
					{#if classes}
						{#each classes as cl}
							<option value={cl.id}>{cl.courseid}</option>
						{/each}
					{/if}
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
				<label for="progress" class="horizontally_margin">
					Current progress: {assignment.progress}%
				</label>
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
				bind:value={date}
				required
			/>
		</div>
		<center><button type="submit">{functionTitle}</button></center>
	</form>
{/if}
