<script>
  export let title, href;
</script>

<a href="#{href}" class="block sm:text-lg lg:text-xl max-w-prose leading-relaxed group">
  <span class="group-hover:text-fuchsia-300 text-accent uppercase font-mono">{title}</span><br/>
  <p class="group-hover:text-blueGray-300 text-blueGray-400"><slot></slot></p>
</a>