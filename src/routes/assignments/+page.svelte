<script lang="ts">
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	import CreatePopupButton from '$lib/createPopupButton.svelte';
	import AssignForm from '$lib/assignForm.svelte';
	export let data: PageData;
	import '$lib/inline_buttons.css';
	import '$lib/view_styles.css';
	import Fa from 'svelte-fa';
	import {
		faClock,
		faCalendarWeek,
		faBell,
		faExclamation,
		faInfo
	} from '@fortawesome/free-solid-svg-icons';
	import { assign } from 'svelte/internal';

	let form: AssignForm;
</script>

<h2>Assignments</h2>
{#if data.assignments}
	{#each data.assignments as Assign}
		<!-- svelte-ignore component-name-lowercase -->
		<assign>
			<div class="full-div">
				<div>
					<h3>{Assign.assignment}</h3>

					<div class="hor-div">
						<Fa icon={faInfo} style="margin: 1em;" />

						<p>{Assign.details}</p>
					</div>

					<div class="hor-div">
						<Fa icon={faClock} style="margin: 1em;" />

						<p>Due: {Assign.due}</p>
					</div>
					<div class="hor-div">
						<Fa icon={faBell} style="margin: 1em;" />
						<p>Progress: {Assign.progress}%</p>
					</div>
					<div class="hor-div">
						<Fa icon={faExclamation} style="margin: 1em;" />
						<p>
							{#if Assign.completed}
								Done{:else}
								Not done
							{/if}
						</p>
					</div>
				</div>
				<div class="button-div">
					<CreatePopupButton
						style="inline-button"
						let:closeAction
						on:closePopup={form.clearFields}
						text="Edit"
					>
						<AssignForm
							functionTitle="Update assignment"
							on:SubmitEvent={() => closeAction()}
							UserId={data.id}
							classes={data.classes}
							assignment={Assign}
							action="/assignments?/update"
							bind:this={form}
						/>
					</CreatePopupButton>
					<a class="inline-button" href="{base}/assignments/{Assign.id}">Check </a>
					<form action="/assignments?/delete" method="POST">
						<input type="hidden" name="id" value={Assign.id} />
						<button class="inline-button" type="submit">Delete</button>
					</form>
				</div>
			</div></assign
		>
	{/each}
{:else}
	<p>Assignments not found</p>
{/if}
{#if data.id}
	<footer>
		<CreatePopupButton let:closeAction on:closePopup={form.clearFields} style="bottom_button">
			<AssignForm
				on:SubmitEvent={() => closeAction()}
				functionTitle="Create assignment"
				UserId={data.id}
				classes={data.classes}
				action="/assignments?/create"
				bind:this={form}
			/>
		</CreatePopupButton>
	</footer>
{/if}

<pre />
