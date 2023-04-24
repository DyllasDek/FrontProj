<script lang="ts">
	import { base } from '$app/paths';
	import CreatePopupButton from '$lib/createPopupButton.svelte';
	import type { PageData } from './$types';
	import ClassForm from '../../lib/classesForm.svelte';

	export let data: PageData;
	let form: ClassForm;
</script>

<h2>Classes</h2>
{#if data.classes}
	{#each data.classes as cl}
		<cl>
			<h3>{cl.courseid}</h3>
			<p>{cl.coursedesc}</p>
			<p>{cl.schedule}</p>
			<p>{cl.category}</p>
			<p>{cl.period}</p>
			<p>{cl.from} - {cl.to}</p>
			<a href="{base}/classes/{cl.id}">check </a>
			<CreatePopupButton let:closeAction on:closePopup={form.ClearFields}>
				<ClassForm
					functionTitle="Update class"
					UserId={data.id}
					{cl}
					on:SubmitEvent={() => closeAction()}
					action="/classes?/update"
					bind:this={form}
				/>
			</CreatePopupButton>
		</cl>
	{/each}
{:else}
	<p>Classes not found</p>
{/if}
{#if data.id}
	<CreatePopupButton let:closeAction on:closePopup={form.ClearFields}>
		<ClassForm
			functionTitle="Create class"
			on:SubmitEvent={() => closeAction()}
			UserId={data.id}
			action="/classes?/create"
			bind:this={form}
		/>
	</CreatePopupButton>
{/if}
<pre />
