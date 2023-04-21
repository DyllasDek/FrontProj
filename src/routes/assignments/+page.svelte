<script>
	import { base } from '$app/paths';
	import CreatePopupButton from './ModifyingAssignments/createPopupButton.svelte';
	import AssignmentCreationForm from './assignmentCreationForm.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
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

<CreatePopupButton let:closeAction={closeAction} >
	<AssignmentCreationForm 
	on:submitAssignment={() => {closeAction(); } 
	
} />
</CreatePopupButton> 
<pre />
