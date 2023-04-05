<script>
    /** @type {import('./$types').PageData} */
    export let data;
    $: ({ assignments } = data)
  </script>
  
  <h2>Assignments</h2>
  {#if assignments}
    {#each assignments as assign}
      <assign>
        <h3>{assign.assignment}</h3>
        <p>{assign.details}</p>
        <p>{assign.due}</p>
        <p>{assign.progress}</p>
        <p>{assign.completed}</p>
      </assign>
    {/each}
  {:else}
    <p>Assignments not found</p>
  {/if}
  
  <pre>
  </pre>