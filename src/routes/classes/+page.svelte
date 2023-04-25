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
				<form action="/classes?/delete" method="POST">
					<input type="hidden" name="id" value={cl.id} />
					<button type="submit" class="delete">Delete</button>
				</form>
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
	button.delete {
		background-color: #7f8994;
		border: none;
		color: white;
		padding: 20px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 20px;
		margin: 4px 2px;
		border-radius: 4%;
	}
	button:hover {
		background-color: #31427d;
		transition: all 0.06s ease-in;
	}
	button:active {
		background-color: #31427d;
		transition: all 0.06s ease-in;
		transform: scale(0.9);
	}
</style>
