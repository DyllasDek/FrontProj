<script lang="ts">
	import { base } from '$app/paths';
	import CreatePopupButton from '$lib/createPopupButton.svelte';
	import type { PageData } from './$types';
	import ClassForm from '../../lib/classesForm.svelte';
	import '$lib/inline_buttons.css';
	import '$lib/view_styles.css';
	import Fa from 'svelte-fa';
	import {
		faClock,
		faCalendarWeek,
		faCalendarDays,
		faFile,
		faInfo
	} from '@fortawesome/free-solid-svg-icons';
	export let data: PageData;
	let form: ClassForm;
</script>

<center><h2>Classes</h2></center>
{#if data.classes}
	{#each data.classes as cl}
		<cl>
			<div class="full-div">
				<div>
					<h3 style="margin: 1em;">{cl.courseid}</h3>

					<div class="hor-div">
						<Fa icon={faInfo} style="margin: 1em;" />
						<p>{cl.coursedesc}</p>
					</div>
					<div class="hor-div">
						<Fa icon={faCalendarDays} style="margin: 1em;" />
						<p>{cl.schedule}</p>
					</div>
					<div class="hor-div">
						<Fa icon={faFile} style="margin: 1em;" />
						<p>{cl.category}</p>
					</div>
					<div class="hor-div">
						<Fa icon={faCalendarWeek} style="margin: 1em;" />
						<p>{cl.period}</p>
					</div>
					<div class="hor-div">
						<Fa icon={faClock} style="margin: 1em;" />
						<p>{cl.from} - {cl.to}</p>
					</div>
				</div>
				<div class="button-div">
					<a href="{base}/classes/{cl.id}" class="inline-button">Check </a>
					<CreatePopupButton
						let:closeAction
						on:closePopup={form.ClearFields}
						text="Edit class"
						style="inline-button"
					>
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
						<button type="submit" class="inline-button">Delete</button>
					</form>
				</div>
			</div></cl
		>
	{/each}
{:else}
	<p>Classes not found</p>
{/if}
{#if data.id}
	<footer>
		<CreatePopupButton style="bottom_button" let:closeAction on:closePopup={form.ClearFields}>
			<ClassForm
				functionTitle="Create class"
				on:SubmitEvent={() => closeAction()}
				UserId={data.id}
				action="/classes?/create"
				bind:this={form}
			/>
		</CreatePopupButton>
	</footer>
{/if}
<pre />
