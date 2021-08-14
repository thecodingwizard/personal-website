<script>
  import AES from "crypto-js/aes.js";
  import Utf8 from "crypto-js/enc-utf8.js";

  export let title, link = undefined, tags = undefined, encrypted = false;

  const handleClick = () => {
    const password = prompt("Enter link password:");
    const decrypted = AES.decrypt(link, password).toString(Utf8);

    if (decrypted) {
      window.location.href = decrypted;
    } else {
      alert("Incorrect password");
    }
  }
</script>

{#if link}
  {#if encrypted}
    <button
      on:click={handleClick}
      class="flex flex-col bg-blue-900 bg-opacity-[15%] hover:bg-opacity-25 group p-6 shadow-md text-left">
      <h2 class="text-blueGray-300 font-mono font-bold text-xl group-hover:text-accent">{title}</h2>
      {#if $$slots.default}
        <div class="h-4" />
        <p class="text-blueGray-400 group-hover:text-blueGray-200 flex-1">
          <slot></slot>
        </p>
      {/if}
      {#if tags}
        <div class="mt-6 text-sm text-blueGray-500 group-hover:text-blueGray-400 font-mono">
          {tags.join(` · `)}
        </div>
      {/if}
    </button>
  {:else}
    <a href={link}
      target={link.startsWith("/") ? undefined : "_blank"}
      class="flex flex-col bg-blue-900 bg-opacity-[15%] hover:bg-opacity-25 group p-6 shadow-md">
      <h2 class="text-blueGray-300 font-mono font-bold text-xl group-hover:text-accent">{title}</h2>
      {#if $$slots.default}
        <div class="h-4" />
        <p class="text-blueGray-400 group-hover:text-blueGray-200 flex-1">
          <slot></slot>
        </p>
      {/if}
      {#if tags}
        <div class="mt-6 text-sm text-blueGray-500 group-hover:text-blueGray-400 font-mono">
          {tags.join(` · `)}
        </div>
      {/if}
    </a>
  {/if}
{:else}
  <div class="flex flex-col bg-blue-900 bg-opacity-[15%] p-6 shadow-md">
    <h2 class="text-blueGray-300 font-mono font-bold text-xl mb-4">{title}</h2>
    <p class="text-blueGray-400 flex-1">
      <slot></slot>
    </p>
    {#if tags}
      <div class="mt-6 text-sm text-blueGray-500 font-mono">
        {tags.join(` · `)}
      </div>
    {/if}
  </div>
{/if}