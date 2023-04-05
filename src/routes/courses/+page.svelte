<script>
	import { base } from '$app/paths';

    /** @type {import('./$types').PageData} */
    export let data;
    $: ({ classes } = data)
  </script>
  
  <h2>Classes</h2>
  {#if classes}
    {#each classes as cl}
      <cl>
        <h3>{cl.courseid}</h3>
        <p>{cl.coursedesc}</p>
        <p>{cl.schedule}</p>
        <p>{cl.category}</p>
        <p>{cl.period}</p>
        <p>{cl.from} - {cl.to}</p>
        <a href="{base}/courses/{cl.id}">check </a>
      </cl>
    {/each}
  {:else}
    <p>Classes not found</p>
  {/if}
  
  <pre>
  </pre>