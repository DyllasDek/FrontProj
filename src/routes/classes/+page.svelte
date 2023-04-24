<script lang="ts">
	import { base } from '$app/paths';
	import CreatePopupButton from '$lib/createPopupButton.svelte';
	import type { PageData } from './$types';
	import ClassForm from '../../lib/classesForm.svelte';

	export let data: PageData;
	let form: ClassForm;
</script>

<center><h2>Classes</h2></center>
{#if data.classes}
	{#each data.classes as cl}
		<cl>
			<div class="class-div">
				<h3>{cl.courseid}</h3>
				<p>{cl.coursedesc}</p>
				<p>{cl.schedule}</p>
				<p>{cl.category}</p>
				<p>{cl.period}</p>
				<p>{cl.from} - {cl.to}</p>
				<a href="{base}/classes/{cl.id}">check </a>
				<CreatePopupButton let:closeAction on:closePopup={form.ClearFields} text="Edit class">
					<ClassForm
						functionTitle="Update class"
						UserId={data.id}
						{cl}
						on:SubmitEvent={() => closeAction()}
						action="/classes?/update"
						bind:this={form}
					/>
				</CreatePopupButton>
			</div>
		</cl>
	{/each}
{:else}
	<p>Classes not found</p>
{/if}
{#if data.id}
	<CreatePopupButton style="bottom_button" let:closeAction on:closePopup={form.ClearFields}>
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

<style>
	.class-div {
		padding-left: 10px;
		box-shadow: 0 4px 6px -5px gray;
	}
	h2 {
		text-align: center;
		margin-top: 1em;
		font-size: 32px;
	}
</style>
