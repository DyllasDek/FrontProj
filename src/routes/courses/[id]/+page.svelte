<script>
	import { base } from '$app/paths';

  /** @type {import('./$types').PageData} */
  export let data;
  $: ({ cl } = data)
</script>

<h2>Class</h2>
{#if cl}
  <h3>{cl.courseid}</h3>
  <p>{cl.coursedesc}</p>
  <p>{cl.schedule}</p>
  <p>{cl.category}</p>
  <p>{cl.period}</p>
  <p>{cl.from} - {cl.to}</p>
{:else}
  <p>Course not found</p>
{/if}

<pre>
</pre>