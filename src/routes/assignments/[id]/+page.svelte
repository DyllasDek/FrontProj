<script lang="ts">
  import type { PageData } from './$types';
  
  export let data : PageData;
</script>

<h2>Assignment</h2>
{#if data._info}
  <h3>{data._info.assignment}</h3>
  <p>{data._info.details}</p>
  <p>{data._info.due}</p>
  <p>{data._info.progress}</p>
  <p>{data._info.completed}</p>
{:else}
  <p>Assignment not found</p>
{/if}

<pre>
</pre>
