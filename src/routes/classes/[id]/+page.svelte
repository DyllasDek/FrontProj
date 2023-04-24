<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h2>Class</h2>
{#if data.cl}
	<h3>{data.cl.courseid}</h3>
	<p>{data.cl.coursedesc}</p>
	<p>{data.cl.schedule}</p>
	<p>{data.cl.category}</p>
	<p>{data.cl.period}</p>
	<p>{data.cl.from} - {data.cl.to}</p>
	{#each data.cl.Assignments as assign}
		<assign>
			<h3>{assign.assignment}</h3>
			<p>{assign.details}</p>
			<p>{assign.due}</p>
			<p>{assign.progress}</p>
			<p>{assign.completed}</p>
		</assign>
	{/each}
{:else}
	<p>Class not found</p>
{/if}

<pre />
