<script>
  export let title, link;
</script>

<div class="sm:max-w-sm w-full mr-6 mb-6 lg:mr-12 lg:mb-12">
  <a href={link} target="_blank" class="block border border-blueGray-800 hover:border-accent hover:bg-blueGray-800 group p-6">
    <h2 class="text-accent font-mono text-xl mb-4 group-hover:text-fuchsia-200">{title}</h2>
    <p class="text-blueGray-400 group-hover:text-blueGray-200"><slot></slot></p>
  </a>
</div>