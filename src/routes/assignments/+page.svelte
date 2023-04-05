<script>
    /** @type {import('./$types').PageData} */
    export let data;
  </script>
  
  <h2>Assignment</h2>
  {#if data}
    {#each data._info as assignment}
      <h3>{assignment._info?.assignment}</h3>
      <p>{assignment._info?.details}</p>
      <p>{assignment._info?.due}</p>
      <p>{assignment._info?.progress}</p>
      <p>{assignment._info?.completed}</p>
    {/each}
  {:else}
    <p>Assignment not found</p>
  {/if}
  
  <pre>
  </pre>