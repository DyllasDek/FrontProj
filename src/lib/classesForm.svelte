<script lang="ts">
	import type { Classes } from '@prisma/client';

	import Textform from '$lib/textform.svelte';
	import '$lib/class_styles.css';

	export let functionTitle: string;
	export let UserId: string;
	export let action: string;

	export let cl: Classes = {
		id: '',
		whoId: UserId,
		courseid: '',
		coursedesc: '',
		category: '',
		schedule: '',
		period: '',
		from: '',
		to: ''
	};

	let form: HTMLFormElement;

	export function ClearFields() {
		form.reset();
	}
</script>

<form method="POST" id="form" bind:this={form} {action}>
	<input type="hidden" name="uid" value={cl.id} />
	<center><h2>{functionTitle}</h2></center>

	<Textform
		bind:bindVar={cl.courseid}
		inputId="title"
		titleText="Course Id:"
		name="courseid"
		placeholder="Write your course title: "
	/>

	<Textform
		bind:bindVar={cl.coursedesc}
		inputId="details"
		name="coursedesc"
		titleText="Information about the course:"
		placeholder="Course description: "
	/>

	<div class="row_direction">
		<label for="category">Category:</label>
		<select
			name="category"
			id="category"
			bind:value={cl.category}
			class="horizontally_margin"
			required
		>
			{#each ['Math', 'English', 'Science', 'History', 'Art', 'Music', 'PE', 'Other'] as category}
				<option value={category}>{category}</option>
			{/each}
		</select>
	</div>

	<div class="column_direction">
		<label for="Schedule">Schedule day:</label>
		<select
			name="schedule"
			id="Schedule"
			bind:value={cl.schedule}
			multiple
			class="horizontally_margin"
			required
		>
			{#each ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as day}
				<option value={day}>{day}</option>
			{/each}
		</select>
	</div>

	<div class="row_direction">
		<label for="period">Period:</label>
		<select name="period" id="period" bind:value={cl.period} class="horizontally_margin" required>
			{#each Array(5) as _, index (index)}
				<option value="Period {index + 1}">Period {index + 1}</option>
			{/each}
		</select>
	</div>

	<div class="row_direction">
		<label for="from">From:</label>
		<input
			class="horizontally_margin"
			type="time"
			id="from"
			name="from"
			max={cl.to}
			bind:value={cl.from}
			required
		/>
	</div>
	<div class="row_direction">
		<label for="to">To:</label>
		<input
			class="horizontally_margin"
			type="time"
			id="to"
			min={cl.from}
			name="to"
			bind:value={cl.to}
			required
		/>
	</div>

	<center><button type="submit">{functionTitle}</button></center>
</form>
