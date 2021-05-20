<script>
  export let title, link, tags;
</script>

<a href={link} target="_blank"
   class="flex flex-col bg-blue-900 bg-opacity-[15%] hover:bg-opacity-25 group p-6 shadow-md">
  <h2 class="text-blueGray-300 font-mono font-bold text-xl mb-4 group-hover:text-accent">{title}</h2>
  <p class="text-blueGray-400 group-hover:text-blueGray-200 flex-1">
    <slot></slot>
  </p>
  {#if tags}
    <div class="mt-6 text-sm text-blueGray-500 group-hover:text-blueGray-400 font-mono">
      {tags.join(` · `)}
    </div>
  {/if}
</a>
