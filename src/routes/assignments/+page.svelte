<script lang="ts">
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	import CreatePopupButton from '$lib/createPopupButton.svelte';
	import AssignForm from '$lib/assignForm.svelte';
	export let data: PageData;

	let form: AssignForm;
</script>

<h2>Assignments</h2>
{#if data.assignments}
	{#each data.assignments as assign}
		<assign>
			<h3>{assign.assignment}</h3>
			<p>{assign.details}</p>
			<p>{assign.due}</p>
			<p>{assign.progress}</p>
			<p>{assign.completed}</p>
			<CreatePopupButton let:closeAction on:closePopup={form.clearFields}>
				<AssignForm
					functionTitle="Update assignment"
					on:SubmitEvent={() => closeAction()}
					UserId={data.id}
					classes={data.classes}
					assignment={assign}
					action="/assignments?/update"
					bind:this={form}
				/>
			</CreatePopupButton>
			<a href="{base}/assignments/{assign.id}">check </a>
		</assign>
	{/each}
{:else}
	<p>Assignments not found</p>
{/if}
{#if data.id}
	<CreatePopupButton let:closeAction on:closePopup={form.clearFields}>
		<AssignForm
			on:SubmitEvent={() => closeAction()}
			functionTitle="Create assignment"
			UserId={data.id}
			classes={data.classes}
			action="/assignments?/create"
			bind:this={form}
		/>
	</CreatePopupButton>
{/if}

<pre />
