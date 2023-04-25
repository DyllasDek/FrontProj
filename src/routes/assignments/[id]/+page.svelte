<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	import '$lib/inline_buttons.css';
	import '$lib/view_styles.css';
	import Fa from 'svelte-fa';
	import { faClock, faBell, faExclamation, faInfo } from '@fortawesome/free-solid-svg-icons';
</script>

<h2>Assignment</h2>
{#if data._info}
	<center>
		<div class="full-div">
			<div>
				<center>
					<h3>{data._info.assignment}</h3>

					<div class="hor-div">
						<Fa icon={faInfo} style="margin: 1em;" />

						<p>{data._info.details}</p>
					</div>

					<div class="hor-div">
						<Fa icon={faClock} style="margin: 1em;" />

						<p>Due: {data._info.due}</p>
					</div>
					<div class="hor-div">
						<Fa icon={faBell} style="margin: 1em;" />
						<p>Progress: {data._info.progress}%</p>
					</div>
					<div class="hor-div">
						<Fa icon={faExclamation} style="margin: 1em;" />
						<p>
							{#if data._info.completed}
								Done{:else}
								Not done
							{/if}
						</p>
					</div></center
				>
			</div>
		</div></center
	>
{:else}
	<p>Assignment not found</p>
{/if}
<pre />

<style>
	.hor-div {
		align-items: center;
		justify-content: center;
	}
</style>
