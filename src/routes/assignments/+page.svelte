<script lang="ts">
	import { base } from '$app/paths';
	import Layout from '../+layout.svelte';
	import type { PageData } from './$types';
	import CreatePopupButton from './ModifyingAssignments/createPopupButton.svelte';
	import AssignmentCreationForm from './ModifyingAssignments/+page.svelte';

	let form: AssignmentCreationForm;
	export let data: PageData;
	$: ({ assignments } = data);
</script>

<h2>Assignments</h2>
{#if assignments}
	{#each assignments as assign}
		<assign>
			<h3>{assign.assignment}</h3>
			<p>{assign.details}</p>
			<p>{assign.due}</p>
			<p>{assign.progress}</p>
			<p>{assign.completed}</p>
			<a href="{base}/assignments/{assign.id}">check </a>
		</assign>
	{/each}
{:else}
	<p>Assignments not found</p>
{/if}

<CreatePopupButton let:closeAction={closeAction}  on:closePopup={form.ClearFields}>
	<AssignmentCreationForm  functionTitle="Create assignment"
	on:submitAssignment={() => {closeAction();}} bind:this={form}/>
</CreatePopupButton> 

<CreatePopupButton let:closeAction={closeAction}  on:closePopup={form.ClearFields}>
	<AssignmentCreationForm  functionTitle="Update assignment"
	on:submitAssignment={() => {closeAction();}} bind:this={form}/>
</CreatePopupButton> 
<pre />
