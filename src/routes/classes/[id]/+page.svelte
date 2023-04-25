<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import Fa from 'svelte-fa';
	import '$lib/view_styles.css';
	import {
		faClock,
		faCalendarWeek,
		faCalendarDays,
		faFile,
		faInfo
	} from '@fortawesome/free-solid-svg-icons';
</script>

<h2>Class</h2>
{#if data.cl}<center>
		<div>
			<center>
				<h3 style="margin: 1em;">{data.cl.courseid}</h3>

				<div class="hor-div">
					<Fa icon={faInfo} style="margin: 1em;" />
					<p>{data.cl.coursedesc}</p>
				</div>
				<div class="hor-div">
					<Fa icon={faCalendarDays} style="margin: 1em;" />
					<p>{data.cl.schedule}</p>
				</div>
				<div class="hor-div">
					<Fa icon={faFile} style="margin: 1em;" />
					<p>{data.cl.category}</p>
				</div>
				<div class="hor-div">
					<Fa icon={faCalendarWeek} style="margin: 1em;" />
					<p>{data.cl.period}</p>
				</div>
				<div class="hor-div">
					<Fa icon={faClock} style="margin: 1em;" />
					<p>{data.cl.from} - {data.cl.to}</p>
				</div></center
			>
		</div>

		{#each data.cl.Assignments as assign}
			<assign>
				<h3>{assign.assignment}</h3>
				<p>{assign.details}</p>
				<p>{assign.due}</p>
				<p>{assign.progress}</p>
				<p>{assign.completed}</p>
			</assign>
		{/each}
	</center>
{:else}
	<p>Class not found</p>
{/if}
<pre />

<style>
	.hor-div {
		align-items: center;
		justify-content: center;
		margin-right: 1em;
	}
</style>
