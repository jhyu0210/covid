<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

{#if status !== 404}
  <div class="container">
    <article class="bg-red-600">
      <div class="message-header">
        <p>Error</p>
      </div>
      <div class="message-body">{error.message}</div>
    </article> 
  </div>
{/if}

{#if status === 404}
  <div class="container">
    <article class="message">
      <div class="h-9 bg-yellow-500">
        <p class="pt-1 font-bold ">Page Not Found</p>
      </div>
      <div class="message-body ml-5">
        <a href="/"><strong>Click here</strong></a>
        to go back home.
      </div>
    </article>
  </div>
{/if}