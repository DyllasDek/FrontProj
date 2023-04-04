<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h2>Assignment</h2>
{#if data}
  <p>{data._info?.details}</p>
  <p>{data._info?.due}</p>
  <p>{data._info?.Progress}</p>
  <p>{data._info?.completed}</p>
{:else}
  <p>Assignment not found</p>
{/if}

<pre>
</pre>