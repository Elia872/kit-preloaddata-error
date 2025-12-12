<script>
  import { preloadData } from "$app/navigation";

  async function getPreloadData() {
    const data = await preloadData("/always404");
    console.log("preloaded:", data);
    return data;
  }

  let preload = $state();
</script>

<button
  onclick={() => {
    preload = getPreloadData();
  }}>preload /routes/always404</button
>
{#if preload}
  {#await preload}
    loading
  {:then data}
    <pre>data: {JSON.stringify(data, null, 2)}</pre>
  {:catch e}
    <pre>error: {e}</pre>
  {/await}
{/if}
