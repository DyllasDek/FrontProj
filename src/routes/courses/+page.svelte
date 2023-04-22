<script lang="ts">
	import { base } from '$app/paths';
	import CreatePopupButton from '$lib/createPopupButton.svelte';
	import CreateCourse from './createCourse.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	$: ({ classes } = data);
	export let form: CreateCourse;
</script>

<h2>Classes</h2>
{#if classes}
	{#each classes as cl}
		<cl>
			<h3>{cl.courseid}</h3>
			<p>{cl.coursedesc}</p>
			<p>{cl.schedule}</p>
			<p>{cl.category}</p>
			<p>{cl.period}</p>
			<p>{cl.from} - {cl.to}</p>
			<a href="{base}/courses/{cl.id}">check </a>
		</cl>
	{/each}
{:else}
	<CreatePopupButton let:closeAction on:closePopup={form.ClearFields}>
		<CreateCourse
			functionTitle="Create assignment"
			on:createCourse={() => {
				closeAction();
			}}
			bind:this={form}
		/>
	</CreatePopupButton>

	<p>Classes not found</p>
{/if}

<pre />
