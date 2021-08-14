<script>
  export let accentText = null, title;
</script>


{#if accentText}
  <span class="text-xl xl:text-2xl text-accent font-mono">{accentText}</span>
  <div class="lg:h-4"></div>
{/if}
<h1 class="text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-white font-semibold lg:-ml-1 xl:-ml-1">{title}<span class="text-accent">.</span></h1>
<div class="h-6 md:h-8 lg:h-12 xl:h-16"></div>