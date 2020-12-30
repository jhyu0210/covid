<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>
<svelte:head>
  <title>Error - {status}</title>
</svelte:head>

{#if status !== 404}
  <div class="container">
    <article>
      <div class="h-9 bg-red-500">
        <p class="pl-1 pt-1 font-bold text-gray-100">Error</p>
      </div>
      <div class="message-body ml-5">{error.message}</div>
    </article> 
  </div>
{/if}

{#if status === 404}
  <div class="container">
    <article class="message">
      <div class="h-9 bg-yellow-500">
        <p class="pt-1 font-bold text-gray-100">Page Not Found</p>
      </div>
      <div class="message-body ml-5">
        <a href="/"><strong>Click here</strong></a>
        to go back home.
      </div>
    </article>
  </div>
{/if}